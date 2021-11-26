import { Request, Response } from "express";
import { updateSettings } from "../services/admin.service";
import { SettingsENUM } from "../utils/constants";

export async function updateUsdtToRial(req: Request, res: Response) {
    console.log("updateUsdtToRial");
    const { usdtToRial } = req.body;
    if (usdtToRial) {
        await updateSettings(SettingsENUM.UsdtToRial, usdtToRial);
        res.sendStatus(200);
    } else {
        res.status(400);
    }
}

export default {
    updateSettings,
};
