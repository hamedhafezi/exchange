import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 20,
    skipSuccessfulRequests: true,
});
export default rateLimiter;
