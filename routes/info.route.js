const express = require("express");
const {
  FetchInfos,
  FetchInfosById,
  UpdateData,
} = require("../controllers/Info.controller");
const router = express.Router();

router.route("/").get(FetchInfos);
router.route("/:id").get(FetchInfosById);
router.route("/:id").patch(UpdateData);

module.exports = router;
