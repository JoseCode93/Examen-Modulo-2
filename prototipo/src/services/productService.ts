// src/services/productService.ts
import {
    getProducts as getProductsRepo,
    getProductById as getProductByIdRepo,
    createProduct as createProductRepo,
    updateProduct as updateProductRepo,
    deleteProduct as deleteProductRepo,
} from "../repositories/productRepository";

export const getProducts = async () => {
    return await getProductsRepo();
};

export const getProductById = async (id: string) => {
    return await getProductByIdRepo(id);
};

export const createProduct = async (data: {
    name: string;
    price: number;
    stock: number;
    is_active?: boolean;
}) => {
    return await createProductRepo(data);
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
    return await updateProductRepo(id, data);
};

export const deleteProduct = async (id: string) => {
    return await deleteProductRepo(id);
};
