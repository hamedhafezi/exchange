class ApiError extends Error {
    statusCode: number | string = 400;
    isOperational: boolean = true;
    constructor(
        statusCode: number | string,
        message: string,
        isOperational = true,
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
