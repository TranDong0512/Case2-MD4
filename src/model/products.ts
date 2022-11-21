import {Schema,model} from 'mongoose'
import {ICategory} from "./category";
import {IUser} from "./user";

export interface IProduct {
    nameProduct ?:string,
    price ?:number,
    category ?: ICategory,
    status ?: boolean,
    address ?: string,
    description ?:string,
    imageP?: string,
    userCreate ?: IUser

}
const ProductSchema = new Schema<IProduct>({
   nameProduct : String,
    price : Number,
    category : {
        type: Schema.Types.ObjectId,
        ref:"category"
    },
    status : Boolean,
    address : String,
    description:String,
    imageP: String,
    userCreate : {
       type:Schema.Types.ObjectId,
        ref:"user"
    }
})

const Product = model<IProduct>('product',ProductSchema)
export {Product}