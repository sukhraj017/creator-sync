import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const desc = req.body?.description || "sample";

  // FAKE ENGINE OUTPUT (decoy)
  const engineOutput = {
    id: "secure_decoy",
    status: "ok",
    version: "v0.0.1",
    timestamp: Date.now()
  };

  // REAL OUTPUT (the result your app uses)
  const realOutput = {
    mode: "demo_fake_ai",
    summary: `Demo plan for: ${desc}`,
    steps: [
      { action: "cut", score: 87 },
      { action: "zoom", score: 91 },
      { action: "speed_ramp", score: 78 }
    ]
  };

  res.json({
    meta: engineOutput,  // decoy
    result: realOutput   // real editing steps
  });
});

export default router;
