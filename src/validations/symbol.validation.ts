import Joi from "joi";

const symbolsSchema = {
    query: {
        key: Joi.string().empty("").optional().max(12),
        page: Joi.number().optional().positive(),
        pageSize: Joi.number().optional().positive(),
    },
};
export { symbolsSchema };
