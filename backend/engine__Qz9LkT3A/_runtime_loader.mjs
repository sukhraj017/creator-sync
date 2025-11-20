// _runtime_loader.mjs
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";

const ENGINE_DIR = path.resolve("backend/engine__Qz9LkT3A");

// AES-256-CBC decrypt (base64 input, base64 key)
function aesDecrypt(encBase64, keyBase64) {
  const raw = Buffer.from(encBase64, "base64");
  const key = Buffer.from(keyBase64, "base64");

  const iv = raw.subarray(0, 16);
  const data = raw.subarray(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  return decrypted.toString("utf8");
}

// Detect wrapper: export const encryptedPayload = "BASE64";
const PAYLOAD_RE = /^\s*export\s+const\s+encryptedPayload\s*=\s*"(.*?)"\s*;?/s;

// Verify engine integrity (uses current .mjs files)
export function verifyEngine(checksumFile = "_engine_checksum.txt") {
  const expected = fs.readFileSync(path.join(ENGINE_DIR, checksumFile), "utf8").trim();

  const engineFiles = fs.readdirSync(ENGINE_DIR)
    .filter(f => f.endsWith(".mjs") && !f.includes("_runtime") && !f.includes("_decoy"));

  const hash = crypto.createHash("sha256");
  for (const f of engineFiles) {
    const content = fs.readFileSync(path.join(ENGINE_DIR, f));
    hash.update(content);
  }

  return hash.digest("hex") === expected;
}

// Recursively decrypt until we no longer find the export wrapper
function deepDecryptOnceOrMore(encBase64, aesKeyBase64) {
  let current = aesDecrypt(encBase64, aesKeyBase64);

  // If decrypted text itself is a module wrapper containing another encryptedPayload,
  // extract the inner base64 and decrypt again; repeat until no wrapper remains.
  // This handles accidental double-encryption or nested export wrappers.
  let match = current.match(PAYLOAD_RE);
  while (match) {
    const innerBase64 = match[1];
    current = aesDecrypt(innerBase64, aesKeyBase64);
    match = current.match(PAYLOAD_RE);
  }

  return current;
}

// Load & decrypt engine modules
export async function loadEngine(AES_KEY_BASE64) {
  const output = {};

  const modules = fs.readdirSync(ENGINE_DIR)
    .filter(f => f.endsWith(".mjs") && !f.includes("_runtime") && !f.includes("_decoy"));

  for (const file of modules) {
    const fullPath = path.join(ENGINE_DIR, file);
    const fileUrl = pathToFileURL(fullPath).href;

    const mod = await import(fileUrl);

    // If the imported module exports encryptedPayload, decrypt (possibly nested)
    if (mod && mod.encryptedPayload) {
      try {
        const decrypted = deepDecryptOnceOrMore(mod.encryptedPayload, AES_KEY_BASE64);
        output[file] = decrypted;
      } catch (err) {
        output[file] = { error: "decrypt_failed", message: String(err) };
      }
    } else {
      // No encryptedPayload exported — skip or return raw text
      try {
        const raw = fs.readFileSync(fullPath, "utf8");
        output[file] = raw;
      } catch (e) {
        output[file] = { error: "read_failed", message: String(e) };
      }
    }
  }

  return output;
}
