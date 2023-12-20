import mongoose from "mongoose";
import studentModel from "./models/student.js";
import { studentsData } from "./data/students.data.js";

const environment = async () => {
  await mongoose.connect("mongodb://localhost:27017/coderteacher");
  console.log("Connected to MongoDB");

  // Insert Students
  // const students = await studentModel.insertMany(studentsData);
  // console.log(students)

  // Desafio 1
  // const result = await studentModel.aggregate([
  //   { $group: { _id: "$grade", students: { $push: "$first_name" } } }, // Agrupar por nombre y notas
  //   { $sort: { _id: -1 } } // Ordenar del mejor al peor
  // ])
  // console.log(result)

  // Desafio 2
  // const result = await studentModel.aggregate([
  //   { $group: { _id: "$group", students: { $push: "$first_name" } } }, // Agrupados por grupo
  // ])
  // console.log(result)

  // Desafio 3
  // const result = await studentModel.aggregate([
  //   { $match: { group: "1B" }},
  //   {
  //     $group: { _id: "$group", total: { $sum: "$grade" }, totalStudents: { $sum: 1 } } // Agrupamos por grupo y notas (total) y cantidad de alumnos
  //   },
  //   { $project: { _id: 1, promedio: { $divide: ["$total", "$totalStudents"] } } } // Creamos un documento con el promedio
  // ])
  // console.log(result)

  // Desafio 4
  // const result = await studentModel.aggregate([
  //   { $match: { group: "1A" }},
  //   {
  //      // Agrupamos por grupo y notas (total) y cantidad de alumnos
  //     $group: { _id: "$group", total: { $sum: "$grade" }, totalStudents: { $sum: 1 } }
  //   },
  //   {
  //     // Creamos un documento con el promedio
  //     $project: { _id: 1, promedio: { $divide: ["$total", "$totalStudents"] } }
  //   }
  // ])
  // console.log(result)

  // Desafio 5
  // const result = await studentModel.aggregate([
  //   { $group: { _id: "Total", total: { $sum: "$grade" }, totalStudents: { $sum: 1 } } },
  //   { $project: { _id: 1, promedio: { $divide: ["$total", "$totalStudents"] } } }
  // ])
  // console.log(result)

  // Desafio 6
  // const result = await studentModel.aggregate([
  //   { $match: { gender: "Male" }},
  //   { $group: { _id: "$gender", total: { $sum: "$grade" }, totalStudents: { $sum: 1 } } },
  //   { $project: { _id: 1, promedio: { $divide: ["$total", "$totalStudents"] } } }
  // ])
  // console.log(result)

  // Desafio 7
  const result = await studentModel.aggregate([
    { $match: { gender: "Female" } },
    {
      $group: {
        _id: "$gender",
        total: { $sum: "$grade" },
        totalStudents: { $sum: 1 },
      },
    },
    {
      $project: { _id: 1, promedio: { $divide: ["$total", "$totalStudents"] } },
    },
  ]);
  console.log(result);
};

environment();
