"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_1 = require("../model/contract");
const products_1 = require("../model/products");
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
        this.showTotalPrice = async (req, res) => {
            let idP = req.params.id;
            let numberOfDays = req.body.numberOfDays;
            let priceP = await products_1.Product.findOne({ _id: idP }, 'price');
            res.json({
                mess: "hiện thị totalPrice",
                totalPrice: priceP.price * numberOfDays,
            });
        };
    }
}
exports.default = new ContractController();
//# sourceMappingURL=contract.Controller.js.map