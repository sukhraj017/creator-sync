// flows/plan.js
export function buildPlan(desc) {
  return {
    description: desc,
    requiresCinematic: desc.toLowerCase().includes("cinematic"),
    intensity: Math.floor(Math.random() * 100),
    aspect: "9:16",
    baseEdits: ["cut", "jump", "align"]
  };
}