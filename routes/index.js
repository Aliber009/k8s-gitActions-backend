const express = require("express");
const InfoRoute = require("./info.route");
const router = express.Router();

const routes = [{ path: "/infos", route: InfoRoute }];

routes.forEach((route) => router.use(route.path, route.route));
module.exports = router;
