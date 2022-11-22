"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_Controller_1 = __importDefault(require("../controller/user.Controller"));
exports.userRouter = (0, express_1.default)();
exports.userRouter.post('/register', user_Controller_1.default.register);
exports.userRouter.post('/login', user_Controller_1.default.login);
exports.userRouter.get('/profile/:id', user_Controller_1.default.showProfile);
exports.userRouter.post('/profile/:id', user_Controller_1.default.editProfile);
//# sourceMappingURL=userRouter.js.map