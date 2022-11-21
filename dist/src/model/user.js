"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: String,
    password: String,
    imageU: String,
    fullName: String,
    phoneNumber: Number,
    email: String
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map