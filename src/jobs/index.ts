import { schedule } from "node-cron";
import { fetchSymbolsAndSave } from "../services/symbols.service";
const task = schedule("*/5 * * * *", async () => {
    await fetchSymbolsAndSave();
    console.log("Job Successfull");
});
task.start();
