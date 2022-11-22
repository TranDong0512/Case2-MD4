"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const mongoose_1 = require("mongoose");
const contractSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "product"
    },
    userBuy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    totalPrice: Number
});
const Contract = (0, mongoose_1.model)('contract', contractSchema);
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map