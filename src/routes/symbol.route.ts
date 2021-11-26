import { Router } from "express";
import {
    handleGetSymbols,
    handleSearchSymbols,
} from "../controllers/symbols.controller";
import validator from "../middlewares/validator.middleware";

const symbolRouter = Router();

symbolRouter.get("/", validator({}), handleGetSymbols);
symbolRouter.get("/search/", handleSearchSymbols);

export default symbolRouter;
