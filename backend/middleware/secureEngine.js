export function secureEngine(req, res, next) {
  // Block direct access attempts
  if (req.originalUrl.includes("stealth")) {
    return res.status(403).json({
      error: "Unauthorized access to core engine"
    });
  }

  // Block suspicious headers
  if (req.headers["x-devtools"] || req.headers["x-reverse-proxy"]) {
    return res.status(401).json({ error: "Blocked suspicious activity" });
  }

  next();
}