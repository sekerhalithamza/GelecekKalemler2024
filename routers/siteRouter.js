const express = require("express");
const controller = require("../controllers/siteController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "files/");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

const upload = multer({
  storage: storage,
});

const router = express.Router();

router.route("/").get(controller.homePage);

router
  .route("/application")
  .get(controller.applicationPage)
  .post(upload.any(), controller.createApplication);

router.route("/application/:status").get(controller.getResult);

module.exports = router;
