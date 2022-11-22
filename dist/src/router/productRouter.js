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
exports.productRouter.get('/detail/:id', product_Controller_1.default.showDetail);
exports.productRouter.get('/findByName', product_Controller_1.default.findByName);
exports.productRouter.get('/category/:id', product_Controller_1.default.findByCategory);
exports.productRouter.post('/category/:id', product_Controller_1.default.findByNameAndCategory);
exports.productRouter.get('/top5Price', product_Controller_1.default.findTop5ByPrice);
//# sourceMappingURL=productRouter.js.map