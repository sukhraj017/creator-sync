import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/", (req, res) => {
  const filename = req.body?.filename || "video.mp4";
  const key = `${Date.now().toString(36)}_${crypto.randomBytes(4).toString("hex")}_${filename}`;

  res.json({
    ok: true,
    upload_key: key,
    upload_url: `https://fake-storage.com/${key}`
  });
});

export default router;
