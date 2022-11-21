"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_1 = require("../model/contract");
class ContractController {
    constructor() {
        this.saveContract = async (req, res) => {
            let newContract = req.body;
            await contract_1.Contract.create(newContract);
            res.json({
                mess: "tạo thành công"
            });
        };
        this.showAllContract = async (req, res) => {
            let contracts = await contract_1.Contract.find().populate('product').populate('userBuy');
            res.json({
                mess: "hiện thị ds contracts",
                contracts: contracts
            });
        };
    }
}
exports.default = new ContractController();
//# sourceMappingURL=contract.Controller.js.map