import { schedule } from "node-cron";
import { getAllSymbols } from "../services/symbols.service";
const task = schedule("*/5 * * * * *", getAllSymbols);
task.start();
