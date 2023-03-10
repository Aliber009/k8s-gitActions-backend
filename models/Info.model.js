const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({}, { strictMode: false });
const Info = mongoose.model("infos", infoSchema);
module.exports = Info;
