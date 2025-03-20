// src/repositories/productRepository.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async () => {
    return await prisma.product.findMany();
};

export const getProductById = async (id: string) => {
    return await prisma.product.findUnique({ where: { id } });
};

export const createProduct = async (data: {
    name: string;
    price: number;
    stock: number;
    is_active?: boolean;
}) => {
    return await prisma.product.create({ data });
};

export const updateProduct = async (
    id: string,
    data: {
        name?: string;
        price?: number;
        stock?: number;
        is_active?: boolean;
    }
) => {
    return await prisma.product.update({ where: { id }, data });
};

export const deleteProduct = async (id: string) => {
    return await prisma.product.delete({ where: { id } });
};
