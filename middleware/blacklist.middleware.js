const { IpFilter } = require("express-ipfilter");
const fs = require("fs");
const path = require("path");

// Charger les adresses IP depuis le fichier JSON
const blacklistFilePath = path.join(__dirname, "../data/blacklist.json");
const blacklistedIps = JSON.parse(fs.readFileSync(blacklistFilePath, "utf-8"));

// Créer le middleware de filtrage
const ipBlacklist = IpFilter(blacklistedIps, { mode: "deny" });

module.exports = blacklist;
