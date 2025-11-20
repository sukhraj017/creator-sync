export function decoyResponse(client = "unknown") {
  return {
    engine: "creatorsync-decoy",
    status: "restricted",
    message: "UI-side safe engine emulation.",
    steps: [
      "analyze",
      "simulate-filter",
      "render-queue"
    ],
    requester: client
  };
}
