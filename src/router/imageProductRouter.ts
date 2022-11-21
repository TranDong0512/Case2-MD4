import router from "express";
import imageProductController from "../controller/imageProduct.Controller";

export const imageProductRouter = router()
imageProductRouter.get('/',imageProductController.showImage)
imageProductRouter.post('/',imageProductController.saveImage)
