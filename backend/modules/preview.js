import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const desc = (req.body?.description || "sample").slice(0,300);

  return res.json({
    ok: true,
    mode: "demo_fake_ai",
    summary: `Demo plan for: ${desc}`,
    steps: [
      { action: "cut", score: 87 },
      { action: "zoom", score: 91 },
      { action: "speed_ramp", score: 78 }
    ]
  });
});

export default router;
