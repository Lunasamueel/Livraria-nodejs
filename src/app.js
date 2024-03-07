import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDb();

connection.on("error", (error) => {
  console.error("connection error ", error);
});

connection.once("open", () => {
  console.log("connection success");
});

const app = express();
routes(app);

export default app;
