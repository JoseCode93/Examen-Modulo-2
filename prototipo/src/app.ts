// src/app.ts
import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "./controllers/productController"; // Importar los métodos específicos

const app = express();
app.use(express.json());

// Endpoints
app.get("/products", getProducts);
app.get("/products/:id", getProductById);
app.post("/products", createProduct);
app.patch("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

export default app;
