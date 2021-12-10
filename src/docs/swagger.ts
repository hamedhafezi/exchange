import swaggerJSDoc, { Options } from "swagger-jsdoc";
const options: Options = {
    swaggerDefinition: {
        info: {
            title: "Simple Exchange REST API",
            version: "1.0.0",
            description: "API Documentation",
        },
    },
    apis: ["swagger.yml"],
};
const specs = swaggerJSDoc(options);
export default specs;
