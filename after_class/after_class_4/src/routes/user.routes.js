import { Router } from "express";
import userDao from "../daos/dbManager/user.dao.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userDao.findUsers();

    res.json({
      data: users,
      message: "Users list",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userDao.findById(id);

    if (!user) return res.json({ message: "User not found" });

    res.json({
      user,
      message: "User found",
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
    const user = await userDao.createUser(req.body);

    res.json({
      user,
      message: "User created",
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

    await userDao.updateUser(id, req.body);

    const user = await userDao.findById(id);

    res.json({
      user,
      message: "User updated",
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
    const user = await userDao.deleteUser(id);

    res.json({
      user,
      message: "User deleted",
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
