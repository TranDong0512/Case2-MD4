
import {Request, Response} from "express";
import {Product} from "../model/products";
class ProductController {
    saveProduct = async (req:Request,res:Response)=>{
        let newProduct = req.body
        await Product.create(newProduct)
        res.json({
            mess:"tạo thành công"
        })
    }
    showProduct = async (req:Request,res:Response)=>{
        let products = await Product.find().populate('category','nameCategory').populate('userCreate')
        res.json({
            mess:"hiện thị ds products",
            products : products
        })
    }
}
export default new ProductController()