import { fetchSymbols } from "./binance.service";
import {
    insertAll,
    findSymbols,
    updateOne,
    getAllSymbolsCount,
    getCount,
} from "../repositories/symbol.repository";
import { getUsdtToRialPrice } from "./admin.service";
import { ISymbol } from "../interfaces/symbol";

export async function fetchSymbolsAndSave() {
    const symbols = (await fetchSymbols()) as ISymbol[];
    const count = await getAllSymbolsCount();
    if (!count) {
        await insertAll(symbols);
    } else {
        symbols.forEach(async (symbol) => {
            await updateOne(
                {
                    $and: [
                        {
                            symbol: { $eq: symbol.symbol },
                            markPrice: { $ne: symbol.markPrice },
                        },
                    ],
                },
                {
                    $set: {
                        markPrice: symbol.markPrice,
                    },
                }
            );
        });
    }
}

export async function getSymbols(
    key: string,
    page: number,
    pageSize: number
): Promise<{ symbols: ISymbol[]; count: number } | undefined> {
    try {
        const countForCheck = await getCount(key);
        if (!countForCheck) {
            const allSymbolsCount = await getAllSymbolsCount();
            if (!allSymbolsCount) {
                await fetchSymbolsAndSave();
            }
        }
        const { count, symbols } = await findSymbols(page, pageSize, key);
        const usdtToRial = await getUsdtToRialPrice();
        if (!usdtToRial?.value) {
            throw new Error("No USDT to Rial provided!");
        }
        symbols.forEach((symbol) => {
            symbol.rialPrice = calculateRialPrice(
                usdtToRial.value,
                symbol.markPrice
            );
        });
        return { symbols, count };
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
}
function calculateRialPrice(usdtToRialPrice: string, markPrice: string) {
    return String(parseInt(usdtToRialPrice, 10) * parseFloat(markPrice));
}
