import mongoose from "mongoose";

const symbolSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            unique: true,
        },
        symbolName: {
            type: String,
        },
        buy: {
            type: String,
        },
        sell: {
            type: String,
        },
        changeRate: {
            type: String,
        },
        changePrice: {
            type: String,
        },
        high: {
            type: String,
        },
        low: {
            type: String,
        },
        vol: {
            type: String,
        },
        volValue: {
            type: String,
        },
        last: {
            type: String,
        },
        averagePrice: {
            type: String,
        },
        takerFeeRate: {
            type: String,
        },
        makerFeeRate: {
            type: String,
        },
        takerCoefficient: {
            type: String,
        },
        makerCoefficient: {
            type: String,
        },
        rialPrice: {
            type: String,
        },
    },
    {
        timestamps: true,
        _id: false,
        id: false,
    }
);
const Symbol = mongoose.model("Symbol", symbolSchema);
export default Symbol;
