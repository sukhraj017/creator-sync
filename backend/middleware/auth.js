export function ipFilter(req, res, next) {
  const blocked = []; // add suspicious IPs here

  const clientIP =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.ip;

  if (blocked.includes(clientIP)) {
    return res.status(403).json({
      ok: false,
      error: "Access denied.",
    });
  }

  next();
}
