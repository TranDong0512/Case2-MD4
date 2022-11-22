"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
const imageProducts_1 = require("../model/imageProducts");
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
            let products = await products_1.Product.find().populate('category', 'nameCategory').populate('userCreate');
            res.json({
                mess: "hiện thị ds products",
                products: products
            });
        };
        this.removeProduct = async (req, res) => {
            const idRemove = req.params.id;
            await products_1.Product.deleteOne({ _id: idRemove });
            res.json({
                mess: "delete"
            });
        };
        this.editProduct = async (req, res) => {
            const idEdit = req.params.id;
            const newProduct = req.body;
            await products_1.Product.updateOne({ _id: idEdit }, {
                $set: newProduct
            });
            res.json({ message: "edit" });
        };
        this.showDetail = async (req, res) => {
            let idFind = req.params.id;
            let imageProducts = await imageProducts_1.ImageProduct.find({ product: idFind });
            let product = await products_1.Product.findOne({ _id: idFind });
            res.json({
                message: "Tim duoc product theo id",
                product: product,
                imageProducts: imageProducts
            });
        };
        this.findByName = async (req, res) => {
            let nameFind = req.body.name;
            let product = await products_1.Product.findOne({ nameProduct: nameFind });
            res.json({
                message: "Tim duoc product theo ten",
                product: product
            });
        };
        this.findByCategory = async (req, res) => {
            let idCFind = req.params.id;
            let products = await products_1.Product.find({ category: idCFind });
            res.json({
                mess: "Tim duoc product theo loai",
                products: products
            });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.Controller.js.map