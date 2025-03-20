// server1.ts

// Importar las dependencias necesarias
import express, { Request, Response } from "express"; // Express.js para crear el servidor
import { mockProducts } from "./mockProducts"; // Importar el mock de productos

// Crear una instancia de Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Almacenar los productos en memoria
let products = [...mockProducts];

// Endpoint: GET /products
// Devuelve la lista de todos los productos
app.get("/products", (req: Request, res: Response) => {
    res.status(200).json(products); // Responder con el array de productos
});

// Endpoint: GET /products/:id
// Devuelve un producto específico por su ID
app.get("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const product = products.find((p) => p.id === productId); // Buscar el producto en el array

    if (product) {
        res.status(200).json(product); // Si se encuentra, responder con el producto
    } else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});

// Endpoint: POST /products
// Crea un nuevo producto
app.post("/products", (req: Request, res: Response) => {
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
app.patch("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const productIndex = products.findIndex((p) => p.id === productId); // Buscar el índice del producto en el array

    if (productIndex !== -1) {
        const updatedProduct = {
            ...products[productIndex], // Mantener los datos existentes
            ...req.body, // Sobrescribir con los datos proporcionados en el cuerpo de la solicitud
            updated_at: new Date(), // Actualizar la fecha de actualización
        };

        products[productIndex] = updatedProduct; // Actualizar el producto en el array
        res.status(200).json(updatedProduct); // Responder con el producto actualizado
    } else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});

// Endpoint: DELETE /products/:id
// Elimina un producto por su ID
app.delete("/products/:id", (req: Request, res: Response) => {
    const productId = req.params.id; // Obtener el ID del producto de los parámetros de la URL
    const productIndex = products.findIndex((p) => p.id === productId); // Buscar el índice del producto en el array

    if (productIndex !== -1) {
        products.splice(productIndex, 1); // Eliminar el producto del array
        res.status(204).send(); // Responder con código 204 (No Content)
    } else {
        res.status(404).json({ message: "Product not found" }); // Si no se encuentra, responder con un error 404
    }
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
