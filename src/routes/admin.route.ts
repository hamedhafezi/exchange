import { Router } from "express";
import validator from "../middlewares/validator.middleware";
import { updateUsdtToRialSchema } from "../validations/admin.validation";
import { updateUsdtToRial } from "../controllers/admin.controller";
const adminRouter = Router();

adminRouter.put(
    "/usdt-to-rial",
    validator(updateUsdtToRialSchema),
    updateUsdtToRial
);

export default adminRouter;
