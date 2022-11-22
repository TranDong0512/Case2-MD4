import { Request, Response } from "express";
declare class UserController {
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response, check: any) => Promise<Response<any, Record<string, any>>>;
    showProfile: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
