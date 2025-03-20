"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
// src/services/productService.ts
const productRepository_1 = require("../repositories/productRepository");
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.getProducts)();
});
exports.getProducts = getProducts;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.getProductById)(id);
});
exports.getProductById = getProductById;
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.createProduct)(data);
});
exports.createProduct = createProduct;
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.updateProduct)(id, data);
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.deleteProduct)(id);
});
exports.deleteProduct = deleteProduct;
