// dsp/motion.js
export function motionDSP(plan) {
  return {
    stabilize: plan.requiresCinematic ? true : false,
    zoom: plan.intensity > 70 ? "slow_zoom" : "none",
    crop: plan.aspect === "9:16" ? "vertical_crop" : "none"
  };
}