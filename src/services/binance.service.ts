import binanceAPI from "../utils/binanceAPI";

export async function fetchSymbols() {
    try {
        return await binanceAPI.get("fapi/v1/premiumIndex").json();
    } catch (error) {
        console.log(error);
    }
}
