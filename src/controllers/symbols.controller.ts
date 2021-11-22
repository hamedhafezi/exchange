import { Request, Response } from "express";
import { getAllSymbols } from "../services/symbols.service";
export function handleGetSymbols(req: Request, res: Response) {}
export function handleSearchSymbols(req: Request, res: Response) {
    const allSymbols = getAllSymbols();
    res.send("handleSearchSymbols");
}
export default {
    handleGetSymbols,
};
