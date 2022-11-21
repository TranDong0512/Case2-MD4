import { Request, Response } from "express";
declare class ContractController {
    saveContract: (req: Request, res: Response) => Promise<void>;
    showAllContract: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ContractController;
export default _default;
