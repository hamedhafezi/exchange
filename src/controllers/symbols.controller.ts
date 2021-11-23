import { Request, Response } from "express";
import { getAllSymbols, searchSymbols } from "../services/symbols.service";
export function handleGetSymbols(req: Request, res: Response) {
    getAllSymbols(function (data: any) {
        res.status(200).json(data);
    });
}
export async function handleSearchSymbols(req: Request, res: Response) {
    const key = req.query.key;
    const symbols = await searchSymbols(String(key));
    console.log(symbols);
    res.send(symbols);
}
export default {
    handleGetSymbols,
    handleSearchSymbols,
};
