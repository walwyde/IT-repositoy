const { sequelize } = require("../models");
const Student  = require("../models/student")(sequelize, sequelize.DataTypes, sequelize.Model)

module.exports = {
  loginController: (req, res) => {
    res.render("login_view");
  },

  registerController: (req, res) => {
    res.render("register_view");
  },

  createController: async (req, res) => {
    try {
      const newStudent = await sequelize.create(req.body)

      console.log(newStudent);
      res.redirect("/auth/login");

    }catch(err) {
      console.log(err)
    }
  },

  verifyregisterController: (req, res) => {
    console.log("login");
    res.redirect("/");
  },
};
