exports.homePage = async (req, res) => {
  res.render("index");
};

exports.applicationPage = async (req, res) => {
  res.render("application");
};

exports.createApplication = async (req, res) => {};
