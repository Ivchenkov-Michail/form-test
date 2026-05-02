import z from "zod";


const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL_SERVER;

const numberRegex = /^[1-9][0-9]*$/;

const citySchema = z.object({
    city: z.string(),
    population: z.string().regex(numberRegex),
});

const citiesSchema = z
    .array(citySchema)
    .transform((cities) =>
        cities.map((c) => ({
            value: c.city,
            label: c.city,
        })),
    );

export type CityOption = { value: string; label: string };

export async function getCitiesOptions(): Promise<CityOption[]> {
    try {
        const res = await fetch(`${apiUrl}/cities`);

        if (!res.ok) {
            throw Error(`Failed to fetch cities: ${res.status} ${res.statusText}`);
        }

        const cities = await res.json();
        const parsed = citiesSchema.safeParse(cities);

        if (!parsed.success) {
            throw Error(parsed.error.message);
        }

        return parsed.data;
    } catch (error) {
        console.error('GetCitiesOptions error:', error);
        throw Error(`GetCitiesOptions error: ${error}`)
    }
}