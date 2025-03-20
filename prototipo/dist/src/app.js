"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const productController_1 = require("./controllers/productController"); // Importar los métodos específicos
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Endpoints
app.get("/products", productController_1.getProducts);
app.get("/products/:id", productController_1.getProductById);
app.post("/products", productController_1.createProduct);
app.patch("/products/:id", productController_1.updateProduct);
app.delete("/products/:id", productController_1.deleteProduct);
exports.default = app;
