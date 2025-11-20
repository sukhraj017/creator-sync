export function generateClipPlan(desc) {
  return {
    engine: "RuleBasedEngine-V1",
    confidence: Math.floor(Math.random() * 40) + 60,
    instructions: [
      "detect scenes",
      "auto crop",
      "cinematic filter"
    ],
    descriptionUsed: desc
  };
}
