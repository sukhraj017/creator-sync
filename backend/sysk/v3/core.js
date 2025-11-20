// v3/core.js
import { buildPlan } from "../flows/plan.js";
import { motionDSP } from "../dsp/motion.js";
import { audioDSP } from "../dsp/audio.js";
import { ffcore } from "../ops/ffcore.js";

export async function runEngine(desc, inputPath, outputPath) {
  // 1) Build editing plan from user prompt
  const plan = buildPlan(desc);

  // 2) Apply DSP logic (motion + audio + filters)
  const dspSteps = {
    motion: motionDSP(plan),
    audio: audioDSP(plan)
  };

  // 3) Convert plan + dsp into FFmpeg commands
  const ffmpegCommands = ffcore(plan, dspSteps, inputPath, outputPath);

  return {
    plan,
    dspSteps,
    ffmpegCommands
  };
}