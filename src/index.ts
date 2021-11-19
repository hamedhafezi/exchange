import app from "./app";
import logger from "./utils/logger";
const PORT = 3000;
const server = app.listen(PORT, onServerStart);

function onServerStart() {
    logger.info(`Server is running on port ${PORT}...`, {
        label: "Server startup",
    });
    console.log(`Server is running on port ${PORT}...`);
}
const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info("Server closed").end();
            logger.on("end", () => {
                process.exit(1);
            });
        });
    } else {
        process.exit(1);
    }
};
function handleError(error: Error, origin: NodeJS.UncaughtExceptionOrigin) {
    logger.error(error.message, { label: origin });
    exitHandler();
}

process.on("uncaughtException", handleError);
process.on("unhandledRejection", handleError);
