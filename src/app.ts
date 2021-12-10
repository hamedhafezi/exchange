import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import httpStatus from "http-status";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";
import specs from "./docs/swagger";
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// hanlde unspecified routes
app.use((_: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).send({
        code: httpStatus.NOT_FOUND,
        message: "Not Found",
    });
});
// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.BAD_REQUEST).send({
        code: httpStatus.BAD_REQUEST,
        message: err.message || "Bad Request",
    });
});
export default app;
