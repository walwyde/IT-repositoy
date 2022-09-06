module.exports = {
  homeController: (req, res) => {
    res.render("index");
  },
  galleryController: (req, res) => {
    res.render("students_list")
  }
};
