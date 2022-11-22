import {Request, Response} from "express";
import {User} from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middelware/auth";


class UserController {

    register = async (req: Request, res: Response) => {
        let user = req.body
        const userFind = await User.findOne({
            userName: user.userName
        })
        if (userFind) {
            res.json({
                mess: 'Tai khoan Da ton tai',
                checkRegister: false
            })
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            await User.create(user)
            res.status(200).json({
                mess: "Thanh Cong",
                checkRegister: true
            })
        }
    }

    login = async (req: Request, res: Response, check) => {
        const user = req.body
        const userFind = await User.findOne({
            userName: user.userName
        })
        if (!userFind) {
            res.json({
                mess: 'Wrong Username',
            })
        } else {
            let compare = await bcrypt.compare(user.password, userFind.password)
            if (!compare) {
                res.json({
                    mess: 'Wrong Password',
                })
            } else {
                let payload = {userName: userFind.userName}
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                return res.json({token: token})
            }
        }
    }

    showProfile = async (req: Request, res: Response) => {
        let idUser = req.params.id;
        let user = await User.findOne({_id: idUser})
        res.json({
            message: "showProfile",
            user: user
        })
    }

    editProfile = async (req: Request, res: Response) => {
        const idEdit = req.params.id;
        const newProfile = req.body;
        await User.updateOne({_id: idEdit},
            {
                $set: newProfile
            })
        res.json({message: "edit", newProfile: newProfile})
    }
}

export default new UserController()