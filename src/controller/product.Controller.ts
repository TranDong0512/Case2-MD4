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

    findProduct = async (req: Request, res: Response) => {
        let idCFind = req.query.id;
        let namePFind = req.query.name;
        let products
        if (idCFind && namePFind) {
            products = await Product.find({nameProduct: namePFind, category: idCFind})
        }
        if (idCFind && !namePFind) {
            products = await Product.find({category: idCFind})
        }
        if (!idCFind && namePFind) {
            products = await Product.find({nameProduct: namePFind})
        }
        res.json({
            mess: "thanh cong",
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

    findProductByIdUser = async (req: Request, res: Response) => {
        let idUser = req.params.id
        let products = await Product.find({userCreate: idUser})
        res.json({
            mess: "thanh cong",
            products: products
        })
    }
}

export default new ProductController()