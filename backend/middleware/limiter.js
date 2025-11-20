import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 30, // 30 requests/min
  message: {
    ok: false,
    error: "Too many requests. Slow down.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
