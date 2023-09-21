// MODULES
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");

// LOCAL VARIABLES
const app = express();
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<USERNAME>",
  process.env.DATABASE_USERNAME
).replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// Connecting to the database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

// MIDDLEWARES
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTERS
const userRouter = require("./routers/userRouter");

app.use("/api/v1/users", userRouter);

// Starting the server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
