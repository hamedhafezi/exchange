import mongoose from "mongoose";
import logger from "../utils/logger";
export async function mongodbInit(onDBConnected: Function) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/exchange");
        onDBConnected();
        console.log("DB Connected");
        console.log("DB Connected", { label: "DB Connected" });
    } catch (error: any) {
        console.log(error.message);
        logger.error(error.message, { label: "DB connection" });
    }
}
