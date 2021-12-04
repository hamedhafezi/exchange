import got from "got";

const BINANCE_API = "https://fapi.binance.com";

const binanceAPI = got.extend({
    prefixUrl: BINANCE_API,
});
export default binanceAPI;
