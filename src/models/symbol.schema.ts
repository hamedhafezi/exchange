import mongoose from "mongoose";

const symbolSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    baseCurrency: {
        type: String,
        required: true,
    },
    quoteCurrency: {
        type: String,
        required: true,
    },
    feeCurrency: {
        type: String,
        required: true,
    },
    market: {
        type: String,
        required: true,
    },
    baseMinSize: {
        type: String,
        required: true,
    },
    quoteMinSize: {
        type: String,
        required: true,
    },
    baseMaxSize: {
        type: String,
        required: true,
    },
    quoteMaxSize: {
        type: String,
        required: true,
    },
    baseIncrement: {
        type: String,
        required: true,
    },
    quoteIncrement: {
        type: String,
        required: true,
    },
    priceIncrement: {
        type: String,
        required: true,
    },
    priceLimitRate: {
        type: String,
        required: true,
    },
    isMarginEnabled: {
        type: String,
        required: true,
    },
    enableTrading: {
        type: String,
        required: true,
    },
});
const Symbol = mongoose.model("Symbol", symbolSchema);
export default Symbol;
