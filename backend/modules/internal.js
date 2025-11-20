import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Suspicious access:", req.ip);
  res.json({ error: "Internal module restricted" });
});

export default router;
