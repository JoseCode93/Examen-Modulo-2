// src/controllers/productController.ts
import { Request, Response } from "express";
import * as productService from "../services/productService";
import { productSchema, updateProductSchema } from "../utils/validation";

// Exportar los métodos correctamente
export const getProducts = async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.status(200).json(products);
};

export const getProductById = async (req: Request, res: Response) => {
    const product = await productService.getProductById(req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const validatedData = productSchema.parse(req.body);
        const newProduct = await productService.createProduct(validatedData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const validatedData = updateProductSchema.parse(req.body);
        const updatedProduct = await productService.updateProduct(
            req.params.id,
            validatedData
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
};
