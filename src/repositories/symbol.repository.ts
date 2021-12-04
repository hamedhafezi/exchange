import { ISymbol } from "../interfaces/symbol";
import Symbol from "../models/symbol.schema";

export async function findSymbols(
    page: number,
    pageSize: number,
    key: string,
    sortBy: keyof ISymbol = "symbol",
    orderBy: "desc" | "asc" = "desc"
): Promise<{ symbols: ISymbol[]; count: number }> {
    let query = {
        symbol: { $regex: key, $options: "i" },
    };
    const symbols = (await Symbol.find(query)
        .sort({ [sortBy]: orderBy })
        .limit(pageSize)
        .skip(pageSize * page)
        .exec()) as ISymbol[];
    const count = await Symbol.find(query).countDocuments(symbols);
    return { symbols, count };
}
export async function insertAll(symbols: ISymbol[]) {
    await Symbol.insertMany(symbols);
}
export async function updateOne(filter?: any, update?: any, options?: any) {
    await Symbol.updateOne(filter, update, options);
}
export async function getAllSymbolsCount() {
    return await Symbol.countDocuments();
}
