"use strict";
// server1.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las dependencias necesarias
const express_1 = __importDefault(require("express")); // Express.js para crear el servidor
const mockProducts_1 = require("./mockProducts"); // Importar el mock de productos
// Crear una instancia de Express
const app = (0, express_1.default)();
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express_1.default.json());
// Almacenar los productos en memoria
let products = [...mockProducts_1.mockProducts];
// Endpoint: GET /products
// Devuelve la lista de todos los productos
app.get("/products", (req, res) => {
    res.status(200).json(products); // Responder con el array de productos
});
// Endpoint: GET /products/:id
// Devuelve un producto específico por su ID
app.get("/products/:id", (req, res) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const product = products.find((p) => p.id === productId); // Buscar el producto en el array
    if (product) {
        res.status(200).json(product); // Si se encuentra, responder con el producto
    }
    else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});
// Endpoint: POST /products
// Crea un nuevo producto
app.post("/products", (req, res) => {
    const newProduct = {
        id: (products.length + 1).toString(), // Generar un nuevo ID basado en la longitud del array
        name: req.body.name, // Obtener el nombre del cuerpo de la solicitud
        price: req.body.price, // Obtener el precio del cuerpo de la solicitud
        stock: req.body.stock, // Obtener el stock del cuerpo de la solicitud
        is_active: req.body.is_active || true, // Establecer is_active como true por defecto
        created_at: new Date(), // Establecer la fecha de creación
        updated_at: new Date(), // Establecer la fecha de actualización
    };
    products.push(newProduct); // Agregar el nuevo producto al array
    res.status(201).json(newProduct); // Responder con el nuevo producto y código 201 (Created)
});
// Endpoint: PATCH /products/:id
// Actualiza un producto existente por su ID
app.patch("/products/:id", (req, res) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const productIndex = products.findIndex((p) => p.id === productId); // Buscar el índice del producto en el array
    if (productIndex !== -1) {
        const updatedProduct = Object.assign(Object.assign(Object.assign({}, products[productIndex]), req.body), { updated_at: new Date() });
        products[productIndex] = updatedProduct; // Actualizar el producto en el array
        res.status(200).json(updatedProduct); // Responder con el producto actualizado
    }
    else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});
// Endpoint: DELETE /products/:id
// Elimina un producto por su ID
app.delete("/products/:id", (req, res) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const productIndex = products.findIndex((p) => p.id === productId); // Buscar el índice del producto en el array
    if (productIndex !== -1) {
        products.splice(productIndex, 1); // Eliminar el producto del array
        res.status(204).send(); // Responder con código 204 (No Content)
    }
    else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});
// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
