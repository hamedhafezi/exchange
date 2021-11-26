import { Request, Response } from "express";
import httpStatus from "http-status";
import { searchSymbols } from "../services/symbols.service";
import { PER_PAGE_DEFAULT } from "../utils/constants";
export function handleGetSymbols(req: Request, res: Response) {
    // getAllSymbols(function (data: any) {
    //     res.status(200).json(data);
    // });
}
export async function handleSearchSymbols(req: Request, res: Response) {
    let { key: keyParam, page: pageParam, perPage: perPageParam } = req.query;

    const perPage = perPageParam ? Number(perPageParam) : PER_PAGE_DEFAULT; //parseInt
    const page = pageParam ? Number(pageParam) - 1 : 0;
    const searchKey = keyParam ? String(keyParam) : "";

    const result = await searchSymbols(searchKey, page, perPage);
    if (result?.symbols?.length && result.count) {
        const totalPages = Math.ceil(result?.count / perPage);
        res.send({
            _metadata: {
                count: result.count,
                pageSize: perPage,
                currentPage: page + 1,
                totalPages,
            },
            data: result.symbols,
        });
    } else {
        res.send({
            data: [],
        });
    }
}
export default {
    handleGetSymbols,
    handleSearchSymbols,
};
