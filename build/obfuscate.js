// build/obfuscate.js
import fs from "fs";
import path from "path";
import crypto from "crypto";
import JavaScriptObfuscator from "javascript-obfuscator";

// Correct paths
const SRC = path.resolve("ops/ffcore.js");
const DEST = path.resolve("ops/ffcore.impl.js");

if (!process.env.BUILD_KEY) {
  console.error("ERROR: BUILD_KEY not available in GitHub runner.");
  process.exit(1);
}

const rawKey = process.env.BUILD_KEY.trim();

// Convert base64 → 32-byte key
const key = crypto.createHash("sha256").update(rawKey).digest();

function aesEncrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8");
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString("base64");
}

// Read core file
const code = fs.readFileSync(SRC, "utf8");

// Inject encrypted string
let processed = code.replace(/'ffmpeg'/g, `"${aesEncrypt("ffmpeg")}"`);

// Obfuscate
const obf = JavaScriptObfuscator.obfuscate(processed, {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  identifierNamesGenerator: "hexadecimal",
});

// Write impl
fs.writeFileSync(DEST, obf.getObfuscatedCode(), "utf8");

// Generate checksum
const implData = fs.readFileSync(DEST);
const checksum = crypto.createHash("sha256").update(implData).digest("hex");
fs.writeFileSync("ops/ffcore.impl.checksum.txt", checksum);

console.log("✔ ffcore.impl.js generated");
console.log("✔ Checksum:", checksum);
