import mongoose from "mongoose";

const symbolSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            unique: true,
        },
        markPrice: {
            type: String,
        },
        rialPrice: {
            type: String,
            default: "",
        },
        indexPrice: {
            type: String,
        },
        estimatedSettlePrice: {
            type: String,
        },
        lastFundingRate: {
            type: String,
        },
        interestRate: {
            type: String,
        },
        nextFundingTime: {
            type: Date,
        },
        time: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);
const Symbol = mongoose.model("Symbol", symbolSchema);
export default Symbol;
