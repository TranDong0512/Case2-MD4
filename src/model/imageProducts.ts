import {Schema,model} from 'mongoose'
import {IProduct} from "./products";
export interface IImageProduct {
    image:string,
    product: IProduct
}
const imageProductSchema = new Schema<IImageProduct>({
    image:String,
    product : {
        type : Schema.Types.ObjectId,
        ref : "product"
    }
})

const ImageProduct = model<IImageProduct>('imageProduct',imageProductSchema)
export {ImageProduct}