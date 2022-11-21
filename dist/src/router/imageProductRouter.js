"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const imageProduct_Controller_1 = __importDefault(require("../controller/imageProduct.Controller"));
exports.imageProductRouter = (0, express_1.default)();
exports.imageProductRouter.get('/', imageProduct_Controller_1.default.showImage);
exports.imageProductRouter.post('/', imageProduct_Controller_1.default.saveImage);
//# sourceMappingURL=imageProductRouter.js.map