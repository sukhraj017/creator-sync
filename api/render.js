import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const { plan, dsp, input, output } = req.body ?? {};

    if (!plan || !dsp || !input || !output) {
      return res.status(400).json({ error: "Invalid request format" });
    }

    // Load the runtime engine
    const runtimePath = path.join(process.cwd(), "ops", "ffcore.runtime.js");
    const runtime = require(runtimePath);

    // Execute
    const cmd = runtime.run(plan, dsp, input, output);

    return res.status(200).json({
      success: true,
      command: cmd
    });

  } catch (err) {
    console.error("ENGINE ERROR:", err);
    return res.status(500).json({ error: "Engine crashed" });
  }
}
