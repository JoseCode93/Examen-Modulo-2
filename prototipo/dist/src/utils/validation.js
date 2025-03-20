"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.productSchema = void 0;
// src/utils/validation.ts
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    stock: zod_1.z.number().int().nonnegative(),
    is_active: zod_1.z.boolean().optional(),
});
exports.updateProductSchema = exports.productSchema.partial();
