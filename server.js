import express from "express";
import { config as configDotenv } from "dotenv";
configDotenv();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
