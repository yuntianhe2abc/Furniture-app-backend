const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/products.router");
const api = process.env.API_URL;

dotenv.config();

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connection is ready... ");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("api/products", productRouter);

//Server
app.listen(3004, () => {
  console.log(api);
  console.log("server is running http://localhost:3000 ");
});
