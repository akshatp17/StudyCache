const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connection");
const bodyParser = require("body-parser");

const resourceRoute = require("./routes/ResourceRoute");
const requestRoute = require("./routes/RequestRoute");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use("/v1/resources", resourceRoute);
app.use("/v1/requests", requestRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${process.env.PORT}`);
});
