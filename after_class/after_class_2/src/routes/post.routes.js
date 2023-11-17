import { Router } from "express";
import { ManagerPost, Post } from "../manager/ManagerPost.js";
import { validatePost } from "../utils/validatePost.js";

const router = Router();

const manager = new ManagerPost("./src/data/post.json");

router.get("/", (req, res) => {
  const posts = manager.getPosts();
  res.json({
    posts,
  });
});

router.post("/", validatePost, async (req, res) => {
  const { userId, id, title, body } = req.body;

  const post = new Post(userId, id, title, body);

  try {
    await manager.savePost(post);
    res.json({
      message: "Post created",
      post,
    });
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({
      error: "Id is required",
    });
  }

  try {
    await manager.deletePost(Number(id));
    res.json({
      message: "Post deleted",
    });
  } catch (e) {
    res.json({
      error: e,
    });
  }
});

export default router;
