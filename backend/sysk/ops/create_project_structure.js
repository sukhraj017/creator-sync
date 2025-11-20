// create_project_structure.js
import fs from 'fs';
import path from 'path';

// Helper to safely create folders
function makeFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("Created folder:", folderPath);
  } else {
    console.log("Folder already exists:", folderPath);
  }
}

// Helper to create placeholder files
function makeFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log("Created file:", filePath);
  } else {
    console.log("File already exists:", filePath);
  }
}

// Base project directory
const root = process.cwd();

// Folder paths
const opsPath = path.join(root, "ops");
const buildPath = path.join(root, "build");
const githubPath = path.join(root, ".github");
const workflowPath = path.join(root, ".github/workflows");

// Create folders
makeFolder(opsPath);
makeFolder(buildPath);
makeFolder(githubPath);
makeFolder(workflowPath);

// Create placeholder files
makeFile(path.join(opsPath, "ffcore.js"), "// ffcore.js placeholder\n");
makeFile(path.join(opsPath, "ffcore.runtime.js"), "// ffcore.runtime.js placeholder\n");
makeFile(path.join(opsPath, "ffcore.impl.js"), "// generated via obfuscation\n");
makeFile(path.join(opsPath, "decoy.js"), "// decoy.js placeholder\n");

makeFile(path.join(buildPath, "obfuscate.js"), "// obfuscation script placeholder\n");

makeFile(path.join(workflowPath, "obfuscate.yml"), "# GitHub Actions workflow\n");

makeFile(path.join(root, "README-OBFUSCATION.md"), "# Obfuscation docs placeholder\n");

console.log("\n✅ Project structure created successfully!");
