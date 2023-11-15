import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },

  filename: function (req, file, cb) {
    // file.originalname
    cb(null, `fecha - ${file.originalname}`);
  },
});

export const loader = multer({ storage });
