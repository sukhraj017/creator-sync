import { decoyResponse } from "./decoy.js";
import fs from "fs";
import crypto from "crypto";

function intrusionScore(meta = {}) {
  let score = 0;

  if (!meta.authValid) score += 5;
  if (meta.suspiciousUA) score += 3;
  if (!process.env.RUNTIME_KEY) score += 5;

  try {
    const implPath = new URL("./ffcore.impl.js", import.meta.url).pathname;
    const data = fs.readFileSync(implPath, "utf8");
    const hash = crypto.createHash("sha256").update(data).digest("hex");

    if (process.env.BUNDLE_CHECKSUM && process.env.BUNDLE_CHECKSUM !== hash)
      score += 10;
  } catch {
    score += 3;
  }

  return score;
}

function runtimeDecrypt(encryptedBase64) {
  const keyHex = process.env.RUNTIME_KEY;
  const key = Buffer.from(keyHex, "hex");

  const buf = Buffer.from(encryptedBase64, "base64");
  const iv = buf.slice(0, 16);
  const ct = buf.slice(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let dec = decipher.update(ct);
  dec = Buffer.concat([dec, decipher.final()]);
  return dec.toString("utf8");
}

export async function handleFFCoreRequest({ plan, dsp, inputPath, outputPath, meta }) {
  if (intrusionScore(meta) >= 7) {
    return decoyResponse(meta.clientIp);
  }

  try {
    const { ffcore } = await import("./ffcore.impl.js");
    const ffBin = process.env.ENCRYPTED_FFBIN
      ? runtimeDecrypt(process.env.ENCRYPTED_FFBIN)
      : "ffmpeg";

    return {
      success: true,
      cmd: ffcore(plan, dsp, inputPath, outputPath, { ffBin })
    };

  } catch (error) {
    return decoyResponse("runtime-error");
  }
}
