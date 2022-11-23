import router from "express";
import contractController from "../controller/contract.Controller";
export const contractRouter = router()
contractRouter.get('/:id', contractController.showAllContract);
contractRouter.post('/:id', contractController.saveContract);
contractRouter.post('/totalPrice/:id', contractController.showTotalPrice)