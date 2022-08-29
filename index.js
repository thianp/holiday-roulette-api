require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { Destination, sequelize } = require("./models");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", async (req, res) => {
  const destination = await Destination.findAll({
    order: sequelize.random(),
    limit: 1
  })

  res.json(destination)
});

app.listen(port, () => console.log("server running on port: " + port));
