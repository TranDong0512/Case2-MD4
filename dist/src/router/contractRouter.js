"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractRouter = void 0;
const express_1 = __importDefault(require("express"));
const contract_Controller_1 = __importDefault(require("../controller/contract.Controller"));
exports.contractRouter = (0, express_1.default)();
exports.contractRouter.get('/', contract_Controller_1.default.showAllContract);
exports.contractRouter.post('/', contract_Controller_1.default.saveContract);
//# sourceMappingURL=contractRouter.js.map