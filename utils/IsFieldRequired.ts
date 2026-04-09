import { z } from "zod";

export function isRequiredField<
    TShape extends z.ZodRawShape,
    TKey extends keyof TShape
>(schema: z.ZodObject<TShape>, fieldName: TKey): boolean {
    const fieldSchema = schema.shape[fieldName] as unknown as z.ZodTypeAny;

    return !fieldSchema.safeParse(undefined).success;
}