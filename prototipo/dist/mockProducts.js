"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockProducts = void 0;
// mockProducts.ts
exports.mockProducts = [
    {
        id: "1", // ID único del producto (string)
        name: "Laptop", // Nombre del producto (string)
        price: 1200, // Precio del producto (number)
        stock: 10, // Cantidad en stock (number)
        is_active: true, // Estado del producto (boolean)
        created_at: new Date(), // Fecha de creación (datetime)
        updated_at: new Date(), // Fecha de actualización (datetime)
    },
    {
        id: "2",
        name: "Smartphone",
        price: 800,
        stock: 20,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
];
