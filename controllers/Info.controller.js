const {
  QueryData,
  QueryDataById,
  updateById,
} = require("../services/Info.service");

const FetchInfos = async (req, res) => {
  const options = req.query;
  const infos = await QueryData(options);
  return res.json({ status: true, infos: infos });
};
const FetchInfosById = async (req, res) => {
  const id = req.params.id;
  const info = await QueryDataById(id);
  return res.json({ status: true, info: info });
};

const UpdateData = async (req, res) => {
  const id = req.params.id;
  const dataBody = req.body;

  const info = await updateById(id, dataBody);

  return res.json({ status: true, info: info });
};

module.exports = { FetchInfos, FetchInfosById, UpdateData };
