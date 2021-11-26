import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
import httpStatus from "http-status";
import ApiError from "./utils/ApiError";
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// hanlde unspecified routes
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).send({
        code: httpStatus.NOT_FOUND,
        message: "Not Found",
    });
    next();
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(httpStatus.BAD_REQUEST).send({
            code: httpStatus.BAD_REQUEST,
            message: "Bad Request",
        });
    } else {
        next();
    }
});
export default app;
