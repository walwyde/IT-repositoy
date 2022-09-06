const express = require("express");
const router = express.Router();

const indexController = require("../controllers/gallery.controller");

router.get("/gallery", indexController.gallerycontroller);

module.exports = router;
