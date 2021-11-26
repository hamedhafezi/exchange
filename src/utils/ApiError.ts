class ApiError extends Error {
    statusCode: number = 400;
    isOperational: boolean = true;
    constructor(
        statusCode: number,
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
