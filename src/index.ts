import app from "./app";

const PORT = 3000;
app.listen(PORT, onServerStart);

function onServerStart() {
    console.log(`Server is running on port ${PORT}...`);
}
function handleError(error: Error, origin: NodeJS.UncaughtExceptionOrigin) {
    process.exit(1);
}

process.on("uncaughtException", handleError);
process.on("unhandledRejection", handleError);