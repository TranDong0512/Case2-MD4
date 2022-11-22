import {Request, Response} from "express";
import {Product} from "../model/products";
import {ImageProduct} from "../model/imageProducts";
import {Category} from "../model/category";

class ProductController {
    saveProduct = async (req: Request, res: Response) => {
        let newProduct = req.body
        await Product.create(newProduct)
        res.json({
            mess: "tạo thành công"
        })
    }

    showProduct = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category', 'nameCategory').populate('userCreate')
        res.json({
            mess: "hiện thị ds products",
            products: products
        })
    }

    removeProduct = async (req: Request, res: Response) => {
        const idRemove = req.params.id;
        await Product.deleteOne({_id: idRemove})
        res.json({
            mess: "delete"
        })
    }

    editProduct = async (req: Request, res: Response) => {
        const idEdit = req.params.id;
        const newProduct = req.body;
        await Product.updateOne({_id: idEdit},
            {
                $set: newProduct
            })
        res.json({message: "edit"})
    }

    showDetail = async (req: Request, res: Response) => {
        let idFind = req.params.id
        let imageProducts = await ImageProduct.find({product: idFind})
        let product = await Product.findOne({_id: idFind})
        res.json({
            message: "Tim duoc product theo id",
            product: product,
            imageProducts: imageProducts
        })
    }

    findByName = async (req: Request, res: Response) => {
        let nameFind = req.query.name;
        let products = await Product.find({nameProduct: new RegExp(req.body.name,'i')})
        res.json({
            message: "Tim duoc product theo ten",
            products: products
        })
    }

    findByCategory = async (req: Request, res: Response) => {
        let idCFind = req.params.id;
        let products = await Product.find({category: idCFind})
        res.json({
            mess: "Tim duoc product theo loai",
            products: products
        })
    }

    findByNameAndCategory = async (req: Request, res: Response) => {
        let idCFind = req.params.id;
        let namePFind = req.body.name;
        let products = await Product.find({nameProduct: namePFind, category: idCFind})
        res.json({
            mess: "tim theo ten va loai",
            products: products
        })
    }

    findTop5ByPrice = async (req: Request, res: Response) => {
        let products = await Product.find({}, null,{ sort: { 'price': 'desc' },limit: 5})
        res.json({
            mess: "thanh cong",
            products: products
        })
    }
}

export default new ProductController()