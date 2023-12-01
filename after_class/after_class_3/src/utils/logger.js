function logger(req, res, next) {
  // console.log(req);
  console.log(
    `${req.method} - ${
      req.originalUrl
    } - ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
  );

  next();
}

export { logger };
