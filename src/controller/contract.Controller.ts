import {Request, Response} from "express";
import {Contract} from "../model/contract";
import {Product} from "../model/products";


class ContractController {
    saveContract = async (req: Request, res: Response) => {
        let idP = req.params.id
        await Product.updateOne({_id: idP}, {
            $set:{status: true}
        })
        let newContract = req.body
        await Contract.create(newContract)
        res.json({
            mess: "tạo thành công"
        })
    }

    showAllContract = async (req:Request,res:Response)=>{
        let idUser = req.params.id
        let contracts = await Contract.find({userBuy: idUser}).populate('product').populate('userBuy')
        res.json({
            mess:"hiện thị ds contracts",
            contracts : contracts
        })
    }

    showTotalPrice = async (req:Request,res:Response)=>{
        let idP = req.params.id
        let numberOfDays = req.body.numberOfDays;
        let priceP = await Product.findOne({_id: idP}, 'price')

        res.json({
            mess:"hiện thị totalPrice",
            totalPrice : priceP.price*numberOfDays,
        })
    }
}

export default new ContractController();
