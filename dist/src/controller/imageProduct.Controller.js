"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageProducts_1 = require("../model/imageProducts");
class ImageProductController {
    constructor() {
        this.saveImage = async (req, res) => {
            const newImage = req.body;
            await imageProducts_1.ImageProduct.create(newImage);
            res.json({
                mess: "tạo ảnh thành công"
            });
        };
        this.showImage = async (req, res) => {
            const imageProduct = await imageProducts_1.ImageProduct.find().populate('product');
            res.json({
                imageProduct: imageProduct
            });
        };
    }
}
exports.default = new ImageProductController();
//# sourceMappingURL=imageProduct.Controller.js.map