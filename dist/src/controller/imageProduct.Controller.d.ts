import { Request, Response } from "express";
declare class ImageProductController {
    saveImage: (req: Request, res: Response) => Promise<void>;
    showImage: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ImageProductController;
export default _default;
