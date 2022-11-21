"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
class ProductController {
    constructor() {
        this.saveProduct = async (req, res) => {
            let newProduct = req.body;
            await products_1.Product.create(newProduct);
            res.json({
                mess: "tạo thành công"
            });
        };
        this.showProduct = async (req, res) => {
            let products = await products_1.Product.find().populate('category', 'nameCategory');
            res.json({
                mess: "hiện thị ds products",
                products: products
            });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.Controller.js.map