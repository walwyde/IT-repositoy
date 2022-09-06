const {post} = require ("../models");
module.exports = {
  gallerycontroller: async (req, res) => {
    const post = await post.findAll();
    res.render("gallery", {posts: posts});

  },
  newpostcontroller: async (req, res) => {
    const data = await req.body
    return res.json({"message": "you've reached the new post middleware"})
  }
}