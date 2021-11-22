import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

export default app;
