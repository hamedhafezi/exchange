import Joi from "joi";

const paramsSchema = Joi.object({
    key: Joi.string().min(1).max(12),
    page: Joi.number(),
    perPage: Joi.number(),
});
