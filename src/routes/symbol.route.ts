import { Router } from "express";
import {
    handleGetSymbols,
    handleSearchSymbols,
} from "../controllers/symbols.controller";
const router = Router();
router.get("/", handleGetSymbols);
router.get("/search/", handleSearchSymbols);

export default router;
