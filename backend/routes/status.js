import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const job = req.query.jobId;

  if (!job) {
    return res.json({
      status: "idle",
      progress: 0
    });
  }

  res.json({
    jobId: job,
    status: "processing",
    progress: 20,
    eta_seconds: 120
  });
});

export default router;
