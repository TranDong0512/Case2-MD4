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
productRouter.get('/findByName', productController.findByName)
productRouter.get('/findByCategory/:id', productController.findByCategory)