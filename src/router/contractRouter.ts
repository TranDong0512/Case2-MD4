import router from "express";
import contractController from "../controller/contract.Controller";
export const contractRouter = router()
contractRouter.get('/', contractController.showAllContract);
contractRouter.post('/', contractController.saveContract);
contractRouter.post('/totalPrice/:id', contractController.showTotalPrice)