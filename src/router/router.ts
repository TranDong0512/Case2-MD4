import Router from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {productRouter} from "./productRouter";
import {imageProductRouter} from "./imageProductRouter";
import {contractRouter} from "./contractRouter";

export const router = Router()
router.use('/users',userRouter);
router.use('/categories',categoryRouter);
router.use('/products',productRouter);
router.use('/imageProducts',imageProductRouter);
router.use('/contracts',contractRouter);

