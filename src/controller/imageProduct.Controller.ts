import {Request, Response} from "express";
import {ImageProduct} from "../model/imageProducts";

class ImageProductController {
    saveImage = async (req:Request,res:Response)=>{
       const newImage =  req.body
        await ImageProduct.create(newImage)
        res.json({
            mess : "tạo ảnh thành công"
        })

    }
    showImage = async (req:Request,res:Response)=>{
        const imageProduct = await ImageProduct.find().populate('product');
        res.json({
            imageProduct : imageProduct
        })

    }
}
export default new ImageProductController()