const express = require("express");
const controller = require("../controllers/siteController");

const router = express.Router();

router.route("/").get(controller.homePage);

router
  .route("/application")
  .get(controller.applicationPage)
  .post(controller.createApplication);

module.exports = router;
