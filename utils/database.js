import mongoose from "mongoose";

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log(`MongoDB is already connected with ${MONGODB_URI}`);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ethnic_prompt",
      useNewUrlParser: true,
      useNewUrlParser: true,
    });

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
