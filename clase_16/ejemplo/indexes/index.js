import mongoose from "mongoose";
import { userModel } from "./models/user.model.js";

const url =
  "mongodb+srv://test:test@curso-nodejs.de1bv.gcp.mongodb.net/CoderPrueba?retryWrites=true&w=majority";

const entorno = async () => {
  await mongoose.connect(url);

  // const result = await userModel
  //   .find({ first_name: "Celia" })
  //   .explain("executionStats");

  // const result = await userModel.find({ $text: { $search: "@unesco" } })

  console.log(result);
};

entorno();
