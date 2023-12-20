import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  name: String,
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  price: Number,
  quantity: Number,
  date: Date,
});

const orderModel = model("Order", orderSchema);

export default orderModel;
