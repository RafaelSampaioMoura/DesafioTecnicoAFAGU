const favCityController = require("./controllers/FavoriteCity.controller");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/favorites", favCityController.getAll);
app.post("/favorites", favCityController.add);
app.delete("/favorites", favCityController.erase);

module.exports = app;
