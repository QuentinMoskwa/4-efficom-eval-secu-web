const { IpFilter } = require("express-ipfilter");
const fs = require("fs");
const path = require("path");

const blacklistFilePath = path.join(__dirname, "../data/blacklist.json");
const blacklistedIps = JSON.parse(fs.readFileSync(blacklistFilePath, "utf-8"));

const ipBlacklist = IpFilter(blacklistedIps, { mode: "deny" });

module.exports = blacklist;
