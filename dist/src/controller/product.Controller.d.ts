import { Request, Response } from "express";
declare class ProductController {
    saveProduct: (req: Request, res: Response) => Promise<void>;
    showProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    showDetail: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    findByCategory: (req: Request, res: Response) => Promise<void>;
    findProduct: (req: Request, res: Response) => Promise<void>;
    findTop5ByPrice: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
