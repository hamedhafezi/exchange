import { Request, Response } from "express";
import httpStatus from "http-status";
import { getSymbols } from "../services/symbols.service";
import { PER_PAGE_DEFAULT } from "../utils/constants";

export async function handleGetSymbols(req: Request, res: Response) {
    let { key: keyParam, page: pageParam, pageSize: pageSizeParam } = req.query;
    const pageSize = pageSizeParam ? Number(pageSizeParam) : PER_PAGE_DEFAULT; //parseInt
    const page = pageParam ? Number(pageParam) - 1 : 0;
    const searchKey = keyParam ? String(keyParam) : "";
    try {
        const result = await getSymbols(searchKey, page, pageSize);
        if (result?.symbols?.length && result.count) {
            const totalPages = Math.ceil(result?.count / pageSize);
            res.send({
                _metadata: {
                    count: result.count,
                    pageSize: pageSize,
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
    } catch (error: any) {
        res.status(httpStatus.BAD_REQUEST).send({
            code: httpStatus.BAD_REQUEST,
            message: error.message,
        });
    }
}
export default {
    handleGetSymbols,
};
