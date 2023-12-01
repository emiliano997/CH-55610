function validatePost(req, res, next) {
  const { userId, id, title, body } = req.body;

  if (!userId) {
    return res.json({
      error: "User id is required",
    });
  }

  if (!id) {
    return res.json({
      error: "Id is required",
    });
  }

  if (!title) {
    return res.json({
      error: "Title is required",
    });
  }

  if (!body) {
    return res.json({
      error: "Body is required",
    });
  }

  next();
}

export { validatePost };
