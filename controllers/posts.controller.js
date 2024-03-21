const path = require("path");

function getPost(req, res) {
  //   res.sendFile(path.join(__dirname, "..", "public", "images", "zero.jpeg"));
  res.render("posts", {
    templateNama: "post",
  });
}

module.exports = {
  getPost,
};
