import Joi from "joi";

const symbolsSchema = {
    query: {
        key: Joi.string().min(1).max(12).alphanum(),
        page: Joi.number().positive(),
        pageSize: Joi.number().positive(),
    },
};
export { symbolsSchema };
