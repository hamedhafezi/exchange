import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    value: {
        type: String,
        required: true,
        trim: true,
    },
});
const Setting = mongoose.model("Setting", settingSchema);
export default Setting;
