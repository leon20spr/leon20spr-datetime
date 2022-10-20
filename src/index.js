const local = require("./handlers/local.js");
const utc = require("./handlers/utc.js");

const datetime = {
    local: local,
    utc: utc
}

exports = module.exports = datetime;