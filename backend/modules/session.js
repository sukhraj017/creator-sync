import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const text = (req.body?.description || "").slice(0,800);

  const jobId = `job_${Date.now()}`;

  console.log("REAL ENGINE RECEIVED:", text);

  res.json({
    ok: true,
    message: "Real engine started",
    jobId
  });
});

export default router;
