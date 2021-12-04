import { Router } from "express";
import { handleGetSymbols } from "../controllers/symbols.controller";
import validator from "../middlewares/validator.middleware";
import { symbolsSchema } from "../validations/symbol.validation";

const symbolRouter = Router();

symbolRouter.get("/", validator(symbolsSchema), handleGetSymbols);

export default symbolRouter;
