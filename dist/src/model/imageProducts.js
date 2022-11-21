"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProduct = void 0;
const mongoose_1 = require("mongoose");
const imageProductSchema = new mongoose_1.Schema({
    image: String,
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "product"
    }
});
const ImageProduct = (0, mongoose_1.model)('imageProduct', imageProductSchema);
exports.ImageProduct = ImageProduct;
//# sourceMappingURL=imageProducts.js.map