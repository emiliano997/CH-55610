import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: String,
  gender: String,
});

// userSchema.index({ first_name: "text", email: "text" });

const userModel = model("users", userSchema);

export { userModel };
