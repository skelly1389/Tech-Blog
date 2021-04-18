const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: { model: Post },
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: { model: Post },
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user/:user_id", async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        where: { user_id: req.params.user_id },
        include: { model: Post},
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

router.post("/", async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!commentData) {
        res.status(404).json({ message: "No comment with this id!" });
        return;
      }
      res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
