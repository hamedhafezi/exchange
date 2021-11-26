import Joi from "joi";
export const updateUsdtToRialSchema = {
    body: {
        usdtToRial: Joi.number()
            .integer()
            .max(1000000)
            .min(100000)
            .positive()
            .required(),
    },
};
