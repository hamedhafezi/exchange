import https from "https";
import Symbol from "../models/symbol.schema";
export function getAllSymbols(cb: any) {
    https.get("https://api.kucoin.com/api/v1/symbols", (resp) => {
        let data: any = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", async () => {
            try {
                const finalData = JSON.parse(data);
                console.log(finalData.data[0]);
                await Symbol.insertMany(finalData.data);
                cb(finalData);
            } catch (error) {
                console.log(error);
            }
        });
    });
}
export async function searchSymbols(key: string) {
    try {
        // const rg = new RegExp()
        const docs = await Symbol.find({
            baseCurrency: { $regex: key, $options: "i" },
        }).exec();
        return docs;
    } catch (error) {
        console.log(error);
    }
}
