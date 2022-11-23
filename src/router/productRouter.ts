import router from "express";
import productController from "../controller/product.Controller";
// import {auth} from '../middelware/auth';

export const productRouter = router();
 // productRouter.use(auth)
productRouter.get('/',productController.showProduct)
productRouter.post('/',productController.saveProduct)
productRouter.delete('/:id', productController.removeProduct)
productRouter.put('/:id', productController.editProduct)
productRouter.get('/detail/:id', productController.showDetail)
productRouter.get('/findProduct', productController.findProduct)
productRouter.get('/top5Price', productController.findTop5ByPrice)