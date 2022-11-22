import {Request, Response} from "express";
import {Contract} from "../model/contract";
import {Product} from "../model/products";


class ContractController {
    saveContract = async (req: Request, res: Response) => {
        let newContract = req.body
        await Contract.create(newContract)
        res.json({
            mess: "tạo thành công"
        })
    }

    showAllContract = async (req:Request,res:Response)=>{
        let contracts = await Contract.find().populate('product').populate('userBuy')
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
