import { Request, Response, NextFunction } from "express";
const validator =
    (schema: any) => (req: Request, res: Response, next: NextFunction) => {
        console.log("Middleware");
        next();
    };

export default validator;
