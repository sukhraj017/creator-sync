import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ ok: true, message: "Upload verified" });
});

export default router;
