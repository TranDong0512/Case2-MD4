"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_Controller_1 = __importDefault(require("../controller/product.Controller"));
exports.productRouter = (0, express_1.default)();
exports.productRouter.get('/', product_Controller_1.default.showProduct);
exports.productRouter.post('/', product_Controller_1.default.saveProduct);
exports.productRouter.delete('/:id', product_Controller_1.default.removeProduct);
exports.productRouter.put('/:id', product_Controller_1.default.editProduct);
exports.productRouter.get('/:id', product_Controller_1.default.showDetail);
exports.productRouter.post('/findByName', product_Controller_1.default.findByName);
exports.productRouter.get('/findByCategory/:id', product_Controller_1.default.findByCategory);
//# sourceMappingURL=productRouter.js.map