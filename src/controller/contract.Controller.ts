import {Request, Response} from "express";
import {Contract} from "../model/contract";


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
}

export default new ContractController();
