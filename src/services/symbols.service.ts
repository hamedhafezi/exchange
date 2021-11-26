import https from "https";
import Symbol from "../models/symbol.schema";
export function getAllSymbols(cb: any) {
    https.get("https://api.kucoin.com/api/v1/market/allTickers", (resp) => {
        let data: any = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", async () => {
            try {
                const finalData = JSON.parse(data);
                await Symbol.insertMany(finalData.data.ticker);
                cb(finalData);
            } catch (error) {
                console.log(error);
            }
        });
    });
}
export async function searchSymbols(
    key: string,
    page: number,
    perPage: number
): Promise<{ symbols: any[]; count: number } | undefined> {
    try {
        let query = {
            baseCurrency: { $regex: key, $options: "i" },
        };
        const symbols = await Symbol.find(query)
            .limit(perPage)
            .skip(perPage * page)
            .exec();
        const count = await Symbol.countDocuments();

        return { symbols, count };
    } catch (error) {
        console.log(error);
        return;
    }
}
