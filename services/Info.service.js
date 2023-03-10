const { default: mongoose } = require("mongoose");
const Info = require("../models/Info.model");

const QueryData = async (options) => {
  const page = options.page ? options.page : 1;
  const limit = options.limit ? options.limit : 20;
  const totalPage = Math.ceil((await Info.countDocuments()) / limit);
  const skip = (page - 1) * limit;

  const infos = await Info.find({}).skip(skip).limit(limit);
  return infos;
};

const QueryDataById = async (id) => {
  const info = await Info.findById(mongoose.Types.ObjectId(id));
  return info;
};
const updateById = async (id, dataBody) => {
  const info = await Info.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    { dataBody }
  );
  return info;
};

module.exports = { QueryData, QueryDataById, updateById };
