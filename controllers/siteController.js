const Application = require("../models/applicationModel");
const fs = require("fs");

exports.homePage = async (req, res) => {
  res.render("index");
};

exports.applicationPage = async (req, res) => {
  res.render("application");
};

exports.createApplication = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      school: req.body.school,
      writing: req.files[0].path,
      certificate: req.files[1].path,
    };

    const newApplication = await Application.create(newUser);

    res.status(201).render("applicationRes", { status: "Success" });
  } catch (err) {
    for (const file of req.files) {
      fs.unlink(file.path, err => {
        if (err) console.log(err);
      });
    }

    res
      .status(400)
      .render("applicationRes", { status: "Success", message: err.message });
  }
};
