import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

const userModel = model("users", userSchema);

export { userModel };
