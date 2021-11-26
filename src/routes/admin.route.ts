import { Router } from "express";
import { updateUsdtToRial } from "../controllers/admin.controller";
const adminRouter = Router();

adminRouter.put("/usdt-to-rial", updateUsdtToRial);

export default adminRouter;
