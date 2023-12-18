import mongoose from "mongoose";
import { userModel } from "./models/user.model.js";
import { courseModel } from "./models/course.model.js";

const url = "";

// const entorno = async () => {
//   await mongoose.connect(url);

//   // const result = await userModel
//   //   .find({ first_name: "Celia" })
//   //   .explain("executionStats");

//   // const result = await userModel.find({ $text: { $search: "@unesco" } })

//   console.log(result);
// };

const entorno = async () => {
  await mongoose.connect(url);

  // await courseModel.create({
  //   title: "Programación Backend",
  //   description: "Curso de Backend",
  //   difficulty: "Intermediate",
  //   professor: "Arturo",
  //   topics: ["Backend", "JavaScript", "Docker"],
  // });

  // const user = await userModel.find({ first_name: "Fulano "})

  // const course = await courseModel.findById("658058250bcfb705e1f23c07");
  const course = await courseModel.find();
  // .populate("students");

  // console.log(course);

  // course.students.push("658046d482ea3a");

  // const result = await courseModel.findByIdAndUpdate(
  //   { _id: course._id },
  //   course
  // );

  // console.log(result);

  console.log(JSON.stringify(course, null, 2));
};

entorno();
