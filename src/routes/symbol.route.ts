import { Router } from "express";
import { handleSearchSymbols } from "../controllers/symbols.controller";
import validator from "../middlewares/validator.middleware";
import { symbolsSchema } from "../validations/symbol.validation";

const symbolRouter = Router();

symbolRouter.get("/", validator(symbolsSchema), handleSearchSymbols);

export default symbolRouter;
