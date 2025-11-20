function aesEncrypt(raw, keyBase64) {
  // decode Base64 → 32-byte AES key
  const key = Buffer.from(keyBase64, "base64");

  // must be 32 bytes for AES-256
  if (key.length !== 32) {
    throw new Error("BUILD_KEY must decode to 32 bytes for AES-256");
  }

  // create random IV
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  let ct = cipher.update(raw, "utf8");
  ct = Buffer.concat([ct, cipher.final()]);

  // return iv + encrypted data (Base64)
  return Buffer.concat([iv, ct]).toString("base64");
}

