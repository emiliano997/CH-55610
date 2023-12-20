import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String,
});

studentSchema.plugin(mongoosePaginate);

const studentModel = model("students", studentSchema);

export default studentModel;
