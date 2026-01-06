const { logInfo } = require("@shworm-lab/core-logger");

function runBusinessFeature(userId) {
  logInfo("Running feature for user", { userId });
  return { ok: true, userId };
}

module.exports = { runBusinessFeature };
