import {Schema,model} from 'mongoose'
interface IUser {
    userName ?:string,
    password ? :string,
    imageU?: string;
    fullName?: string;
    phoneNumber?: number;
    email?: string
}
const userSchema = new Schema<IUser>({
    userName:  String,
    password:String,
    imageU: String,
    fullName: String,
    phoneNumber: Number,
    email: String
})

const User = model<IUser>('user',userSchema)
export {User}