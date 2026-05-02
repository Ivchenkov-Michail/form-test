# 📝 Form Test Project

The project implements a registration form with validation, city directory loading, and submission of data to a mock backend.  
The goal is to demonstrate a production-style approach to forms: data schema, typing, client-side validation, and API interaction.

---

## Architecture

### High-level structure

- **Frontend**: Next.js (App Router, TypeScript), React 19.
- **Backend**: a small Express server exposing a city list and handling registration POST requests.
- **Infrastructure**: Docker + Docker Compose, a bash CLI to manage environments (`./cli up-dev`, `./cli up-prod`, etc.).

The repository is monolithic, split into:

- `app/` – Next.js entrypoints, root layout, main page with the form.
- `components/` – UI and business logic, organized in a feature-oriented way (features + shared + widgets).
- `backend/` – mock API (`/api/cities`, `/api/register`).
- `styles/` – base SCSS variables and global reset.

---

## Architectural decisions and approaches

### Feature-oriented structure

- The `RegisterForm` feature lives in its own directory with subfolders: `_lib` (schema and types), `_api` (backend calls), `_components` (form parts).
- Shared elements live under `components/shared` (atomic UI, form fields, API utilities), which makes reuse and scaling easier.

### Validation and typing

- The entire form schema is defined via Zod, and the corresponding types (`FormInput`, `FormValues`) are inferred from it.
- React Hook Form uses `zodResolver`, so validation and TypeScript types are driven by a single source of truth.
- Field requiredness is determined programmatically (`isRequiredField`); the UI reads this from the schema instead of hardcoded flags.

### API and data handling

- The city directory is fetched on the server (SSR) via the `shared/api` layer and then passed into the `RegisterFormWidget`.
- Form submission is encapsulated in `_api/register.mutation.ts` and uses different base URLs for server and client through `NEXT_PUBLIC_BACKEND_API_URL_SERVER/CLIENT`.
- The backend keeps logic minimal: it filters/sorts cities, logs the form payload, and returns `{ message: "ok" }`.

### UX and robustness

- `ErrorBoundary` plus `ErrorComponent` provide a controlled fallback on runtime errors.
- `React.Suspense` with `Spinner` shows loading states during SSR fetches.
- `react-toastify` is used to display submission status (success/error).
- Local user state (name and last update time) is stored in `localStorage` and used for greeting and the “last changes…” label.

### Infrastructure and environments

- Separate Dockerfiles are used for frontend dev and prod; the backend is packaged into its own image.
- Docker Compose assembles the `nextjs` + `api` stack; the dev setup mounts source code for hot reload.
- The CLI script (`./cli`) wraps `docker compose` commands to standardize environment startup and shutdown.
- ESLint + lint-staged + Husky provide basic quality checks before commits.

---

## Deployment roadmap (short)

1. Install:

   ```bash
   npm install
   ```

2. Copy the environment example:

   ```bash
   cp example.env .env
   ```

3. **Dev mode (recommended for development):**

   ```bash
   chmod +x ./cli
   ./cli up-dev
   ```

   Open `http://localhost:3000` (frontend) and `http://localhost:4000/api` (mock API).

4. **Prod mode (build and run via Docker):**

   ```bash
   ./cli up-prod
   ```

   Frontend and API are available on ports 3000 and 4000 respectively.

5. Stop environments:

   ```bash
   ./cli down-dev
   ./cli down-prod
   ```
