import Joi from "joi";

const symbolsSchema = {
    query: {
        key: Joi.string().min(1).max(12).alphanum(),
        page: Joi.number().positive(),
        perPage: Joi.number().positive(),
    },
};
export { symbolsSchema };