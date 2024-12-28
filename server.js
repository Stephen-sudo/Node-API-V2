import express from "express";
import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";
import cors from "cors";
import ProductRouter from "./routes/product.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;
const DATEBASE_URL = process.env.DATEBASE_URL;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", ProductRouter);
app.get("/", (req, res) => {
  // throw new Error("Fake error");
  res.send("Hello World");
});

app.use(errorMiddleware);

mongoose
  .connect(DATEBASE_URL)
  .then(() => {
    console.log("Connected to Database successfully");
    app.listen(PORT, () => {
      console.log(`Server is listening on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
