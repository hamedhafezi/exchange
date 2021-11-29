import https from "https";
import Setting from "../models/setting.schema";
import Symbol from "../models/symbol.schema";

export function getAllSymbols() {
    https.get("https://api.kucoin.com/api/v1/market/allTickers", (resp) => {
        let data: any = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", async () => {
            try {
                let finalData = JSON.parse(data).data.ticker;
                const count = await Symbol.countDocuments();
                if (count) {
                    // await Symbol.collection.updateMany({}, finalData.data.ticker, { upsert: true });
                    finalData.forEach(async (symbol: any) => {
                        await Symbol.updateOne(
                            {
                                $and: [
                                    {
                                        symbol: { $eq: symbol.symbol },
                                        sell: { $ne: symbol.sell },
                                    },
                                ],
                            },
                            {
                                $set: {
                                    sell: symbol.sell,
                                },
                            }
                            // { upsert: true, }
                        );
                    });
                } else {
                    await Symbol.insertMany(finalData);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
}

export async function searchSymbols(
    key: string,
    page: number,
    pageSize: number
): Promise<{ symbols: any[]; count: number } | undefined> {
    getAllSymbols();
    try {
        let query = {
            symbolName: { $regex: key, $options: "i" },
        };
        const symbols = await Symbol.find(query)
            .sort({ updatedAt: "desc" })
            .limit(pageSize)
            .skip(pageSize * page)
            .exec();
        const count = await Symbol.find(query).countDocuments();
        const usdtToRial = await Setting.findOne({ id: "usdtToRial" });
        symbols.forEach((s) => {
            s.rialPrice = String(
                parseInt(usdtToRial.value, 10) * parseFloat(s.sell)
            );
        });
        return { symbols, count };
    } catch (error) {
        console.log(error);
        return;
    }
}
