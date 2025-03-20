// src/utils/validation.ts
import { z } from "zod";

export const productSchema = z.object({
    name: z.string(),
    price: z.number().positive(),
    stock: z.number().int().nonnegative(),
    is_active: z.boolean().optional(),
});

export const updateProductSchema = productSchema.partial();
