const { runBusinessFeature } = require("@shworm-lab/feature-lib");

async function main() {
  console.log("Victim app starting (benign world)...");
  const result = runBusinessFeature("shadowroot");
  console.log("Feature result:", result);
}

main().catch(console.error);
