import { loadEngine, verifyEngine } from "./engine__Qz9LkT3A/_runtime_loader.mjs";

console.log("⏳ Checking engine integrity...");
console.log("Integrity OK?", verifyEngine());

console.log("\n⏳ Loading engine...");
const AES_KEY = "8DekZHoZn35SFJLmVCeXvqbDemmYcRtOYFtuYHrR9rY=";

const eng = await loadEngine(AES_KEY);

console.log("\n🔥 DECRYPTED ENGINE:");
console.log(eng);
