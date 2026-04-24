# 📝 Form Test Project

A frontend test assignment for a Frontend Developer position.

This project implements a registration form with validation, server-side data fetching, and submission to a mock backend API.

---

# 🚀 Tech Stack

## Frontend

- Next.js (App Router)
- React 19
- TypeScript
- React Hook Form
- Zod (validation + type inference)
- React Select
- React IMask
- React Toastify
- SCSS (CSS Modules)

## Backend (mock)

- Node.js
- Express

## Infrastructure

- Docker
- Docker Compose

---

# 📦 Installation and Setup

## Using Docker (recommended)

### Development

```bash
./cli up-dev
```

### Production

```bash
./cli up-prod
```

### Stop containers

```bash
./cli down-dev
./cli down-prod
```

---

## Without Docker

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node index.js
```

---

# 🌐 Application URLs

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:4000](http://localhost:4000)

---

# ⚙️ Environment Variables

Example `.env` file:

```env
NEXT_PUBLIC_BACKEND_API_URL_SERVER=http://api:4000
NEXT_PUBLIC_BACKEND_API_URL_CLIENT=http://127.0.0.1:4000
```

---

# 🧩 Project Architecture

## Frontend structure

```
components/
  features/        # business features (RegisterForm)
  shared/          # reusable components and utilities
    ui/            # base UI components
    common/        # form wrappers
    api/           # API calls
    lib/           # utilities
  widgets/         # composition-level components
```

### Key principles

- Separation of concerns
- Component reusability
- Feature-based structure
- Type safety via Zod

---

## Backend structure

A minimal Express server used as a mock API:

- `GET /cities` — returns a list of cities
- `POST /register` — accepts form data

---

# 🧠 Key Decisions

## 1. Form Validation

Built with:

- React Hook Form
- Zod

---

## 2. Server-Side Data Fetching

Cities are fetched on the server using Next.js:

- Reduces client-side requests
- Improves initial render performance

---

## 3. UI Abstractions

Reusable form components:

- TextField
- SelectField
- PhoneField
- CheckboxField

---

## 4. UX Improvements

- Disabled submit button when form is invalid
- Loading indicator during submission
- Toast notifications
- Local storage for user name persistence

---

# 📡 API

## GET /cities

Returns a filtered and sorted list of cities.

## POST /register

Accepts form payload:

```json
{
  "name": "string",
  "town": "string",
  "email": "string",
  "phone_number": "string",
  "password": "string",
  "subscribe_to_updates_by_email": true
}
```

---

# 🧪 Linting and Quality

- ESLint (Next.js config)
- lint-staged
- Husky (pre-commit hooks)

---

# 🐳 Docker

The project supports two modes:

- Development (with hot reload)
- Production (optimized build)

Multi-stage builds are used to reduce image size.

---
