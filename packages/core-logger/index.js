function logInfo(msg, meta = {}) {
  console.log(`[INFO] ${new Date().toISOString()} - ${msg}`, meta);
}

function logWarn(msg, meta = {}) {
  console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`, meta);
}

function logError(msg, meta = {}) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, meta);
}

module.exports = { logInfo, logWarn, logError };
