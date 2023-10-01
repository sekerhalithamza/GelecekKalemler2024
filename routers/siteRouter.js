const express = require("express");
const controller = require("../controllers/siteController");

const router = express.Router();

router.route("/").get(controller.homePage);

module.exports = router;
