import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  course: {
    type: String,
    enum: ["Frontend", "Backend", "JavaScript"],
  },
});

const userModel = model("User", userSchema);

export { userModel };
