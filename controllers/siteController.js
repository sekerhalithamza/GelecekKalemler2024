exports.homePage = async (req, res) => {
  if (!req.session?.user) return res.render("index", { user: undefined });
  res.render("index", { user: req.session.user });
};
