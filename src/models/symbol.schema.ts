import mongoose from "mongoose";

const symbolSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
    },
    symbolName: {
        type: String,
        required: true,
    },
    buy: {
        type: String,
        required: true,
    },
    sell: {
        type: String,
        required: true,
    },
    changeRate: {
        type: String,
        required: true,
    },
    changePrice: {
        type: String,
        required: true,
    },
    high: {
        type: String,
        required: true,
    },
    low: {
        type: String,
        required: true,
    },
    vol: {
        type: String,
        required: true,
    },
    volValue: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    averagePrice: {
        type: String,
        required: true,
    },
    takerFeeRate: {
        type: String,
        required: true,
    },
    makerFeeRate: {
        type: String,
        required: true,
    },
    takerCoefficient: {
        type: String,
        required: true,
    },
    makerCoefficient: {
        type: String,
        required: true,
    },
});
const Symbol = mongoose.model("Symbol", symbolSchema);
export default Symbol;
