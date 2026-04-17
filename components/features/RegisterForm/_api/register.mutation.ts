import { FormValues } from "../_lib/Form.schema";


const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL_CLIENT;

export type RegisterPayload = Omit<FormValues, "confirm_password">;

export async function registerUser(payload: RegisterPayload) {
    const res = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
}
