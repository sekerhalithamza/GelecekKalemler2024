// MODULES
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");

// LOCAL VARIABLES
const app = express();
dotenv.config({ path: "./config.env" });

app.use(cors());

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

// ROUTERS
app.set("view engine", "ejs");

app.set("views", `${__dirname}/public/views`);

app.use(express.static(`${__dirname}/public`));

app.use("/", require("./routers/siteRouter"));

// Starting the server
const port = process.env.port || 80;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
