import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import Joi from "joi";
import { pick } from "../utils/helpers";
const validator =
    (schema: object) => (req: Request, res: Response, next: NextFunction) => {
        const validSchema = pick(schema, ["params", "query", "body"]);
        const object = pick(req, Object.keys(validSchema));
        const { value, error } = Joi.compile(validSchema)
            .prefs({ errors: { label: "key" }, abortEarly: false })
            .validate(object);

        if (error) {
            const errorMessage = error.details
                .map((details) => details.message)
                .join(", ");
            res.status(httpStatus.BAD_REQUEST).send({
                code: httpStatus.BAD_REQUEST,
                message: errorMessage,
            });
            return next(error);
        }
        Object.assign(req, value);
        return next();
    };

export default validator;
