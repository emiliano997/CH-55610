import { Router } from "express";
import postDao from "../daos/dbManager/post.dao.js";
import { postModel } from "../models/post.model.js";
import { userModel } from "../models/user.model.js";
import userDao from "../daos/dbManager/user.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const posts = await postDao.findPosts();
    res.json({
      data: posts,
      message: "Post list",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { author } = req.body;

    const user = await userDao.findById(author);

    if (!user) return res.status(404).json({ message: "User not found" });

    const post = await postDao.createPost(req.body);

    res.json({
      post,
      message: "Post created",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postDao.updatePost(id, req.body);

    res.json({
      post,
      message: "Post updated",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postDao.deletePost(id);

    res.json({
      post,
      message: "Post deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
});

export default router;
