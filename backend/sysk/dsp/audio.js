// dsp/audio.js
export function audioDSP(plan) {
  return {
    normalize: true,
    denoise: plan.requiresCinematic ? true : false,
    volume: plan.intensity > 60 ? 1.1 : 1.0
  };
}