import mongoose from "mongoose";
import orderModel from "./models/order.js";

const environment = async () => {
  await mongoose.connect("mongodb://localhost:27017/pizza");

  // Insert Many
  // const result = await orderModel.insertMany([
  //   {
  //     name: "Pepperoni",
  //     size: "small",
  //     price: 19,
  //     quantity: 10,
  //     date: "2021-05-01",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "medium",
  //     price: 20,
  //     quantity: 20,
  //     date: "2021-05-02",
  //   },
  //   {
  //     name: "Pepperoni",
  //     size: "large",
  //     price: 21,
  //     quantity: 30,
  //     date: "2021-05-03",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "small",
  //     price: 12,
  //     quantity: 15,
  //     date: "2021-05-04",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "medium",
  //     price: 13,
  //     quantity: 50,
  //     date: "2021-05-05",
  //   },
  //   {
  //     name: "Cheese",
  //     size: "large",
  //     price: 14,
  //     quantity: 10,
  //     date: "2021-05-06",
  //   },
  //   {
  //     name: "Vegan",
  //     size: "small",
  //     price: 17,
  //     quantity: 10,
  //     date: "2021-05-07",
  //   },
  //   {
  //     name: "Vegan",
  //     size: "medium",
  //     price: 18,
  //     quantity: 10,
  //     date: "2021-05-08",
  //   },
  // ]);
  // console.log(result);

  // // Find
  // const orders = await orderModel.find();
  // console.log(result);

  const size = "small";

  const result = await orderModel.aggregate([
    {
      // Stage 1: Buscar pizzas del tamaño mediano
      $match: {
        size,
      },
    },
    {
      // Stage 2: Agrupar pizzas por nombre
      $group: {
        _id: "$name",
        price: {
          $first: "$price",
        },
        totalSells: {
          $sum: "$quantity",
        },
      },
    },
    {
      // Stage 3: Ordenar por ventas de mayor a menor
      $sort: {
        totalSells: -1,
      },
    },
    {
      // Stage 4: Agrupar en un nuevo objeto
      $group: {
        _id: 1,
        orders: {
          $push: "$$ROOT",
        },
      },
    },
    // {
    //   // Stage 5: Creamos un nuevo documento
    //   $project: {
    //     _id: 0,
    //     orders: "$orders",
    //   },
    // },
    // {
    //   // Stage 6: Inserción en nueva colección
    //   $merge: {
    //     into: "reports",
    //   },
    // },
  ]);

  console.log(result);
};

environment();
