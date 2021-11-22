import { Request, Response } from "express";
export function handleGetSymbols(req: Request, res: Response) {
    res.send("handleGetSymbols");
}
export function handleSearchSymbols(req: Request, res: Response) {
    res.send("handleSearchSymbols");
}
export default {
    handleGetSymbols,
};
