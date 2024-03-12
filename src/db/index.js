import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABSE_URI}/${DB_NAME}`,
    );
    console.log(
      `MongoDb connected ! DB host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("mongoDb connection error ", error), process.exit;
  }
};

export default connectDB;
