import Setting from "../models/setting.schema";
import { SettingsENUM } from "../utils/constants";

export async function updateSettings(setting: SettingsENUM, price: string) {
    try {
        const settingItem = await Setting.findOneAndUpdate({
            id: setting,
            value: price,
        }).exec();
        if (!settingItem) {
            const settingItem = new Setting({
                id: setting,
                value: price,
            });
            await settingItem.save();
        }
    } catch (error) {
        return console.log(error);
    }
}
export async function getUsdtToRialPrice() {
    try {
        const usdtToRialPrice = await Setting.findOne({
            id: SettingsENUM.UsdtToRial,
        }).exec();
        return usdtToRialPrice;
    } catch (error) {
        return console.log(error);
    }
}
