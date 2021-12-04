import Setting from "../models/setting.schema";
import { SettingsENUM } from "../utils/constants";

export async function updateOrInsertSettings(
    setting: SettingsENUM,
    value: string
) {
    try {
        const settingItem = await Setting.findOneAndUpdate({
            id: setting,
            value: value,
        }).exec();
        if (!settingItem) {
            const settingItem = new Setting({
                id: setting,
                value: value,
            });
            await settingItem.save();
        }
    } catch (error) {
        return console.log(error);
    }
}
export async function getSetting(setting: SettingsENUM) {
    try {
        const settingItem = await Setting.findOne({
            id: setting,
        }).exec();
        return settingItem;
    } catch (error) {
        return console.log(error);
    }
}
