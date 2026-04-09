import z from "zod";


const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

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

export async function GetCitiesOptions(): Promise<CityOption[]> {
    const res = await fetch(`${apiUrl}/cities`);
    const cities = await res.json();

    const parsed = citiesSchema.safeParse(cities);

    if (!parsed.success) {
        console.error(parsed.error);
        return []; // или бросить ошибку, или вернуть default
    }

    // здесь parsed.data гарантированно: { value; label }[]
    return parsed.data;
}