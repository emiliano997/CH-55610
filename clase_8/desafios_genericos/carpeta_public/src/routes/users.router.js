import { Router } from "express";

const router = Router();

const users = [];

router.get("/", (req, res) => {
  res.json({
    users,
  });
});

router.post("/", (req, res) => {
  const { username, email } = req.body;

  users.push({
    username,
    email,
  });

  res.json({
    user: {
      username,
      email,
    },
  });
});

export default router;
