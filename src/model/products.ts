import {Schema,model} from 'mongoose'
import {ICategory} from "./category";

export interface IProduct {
    nameProduct ?:string,
    price ?:number,
    category ?: ICategory,
    status ?: boolean,
    address ?: string,
    description ?:string,
    imageP?: string

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
    imageP: String
})

const Product = model<IProduct>('product',ProductSchema)
export {Product}