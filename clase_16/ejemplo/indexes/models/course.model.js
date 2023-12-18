import { Schema, model } from "mongoose";

// const studentSchema = new Schema({
//   user_id: Schema.Types.ObjectId,
//   grade: Number
// })

const courseSchema = new Schema({
  title: String,
  description: String,
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  topics: {
    type: Array,
    default: [],
  },
  professor: String,
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

courseSchema.pre("find", function () {
  // console.log(this);
  this.populate("students");
});

const courseModel = model("course", courseSchema);

export { courseModel };
