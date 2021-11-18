import express from "express";

const app = express();
const PORT = 8080;
app.listen(function onServerStart() {
    console.log(`Server is running on port ${PORT}...`)
});