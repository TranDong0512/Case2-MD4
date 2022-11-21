"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    nameProduct: String,
    price: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category"
    },
    status: Boolean,
    address: String,
    description: String,
    imageP: String,
    userCreate: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    }
});
const Product = (0, mongoose_1.model)('product', ProductSchema);
exports.Product = Product;
//# sourceMappingURL=products.js.map