import {Schema, model} from "mongoose"
import {IProduct} from "./products";
import {IUser} from "./user";

export interface IContract {
    product? : IProduct,
    userBuy?: IUser,
    time? : string
}

const contractSchema = new Schema<IContract>({
    product: {
        type: Schema.Types.ObjectId,
        ref:"product"
    },
    userBuy: {
        type: Schema.Types.ObjectId,
        ref:"user"
    },
    time: String
})

const Contract = model<IContract>('contract', contractSchema);

export {Contract};