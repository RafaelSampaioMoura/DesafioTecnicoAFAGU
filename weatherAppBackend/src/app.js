import express from "express";
import {
  getAll as _getAll,
  add as _add,
  erase as _erase,
} from "./controllers/FavoriteCity.controller";

const app = express();

app.get("/favorites", _getAll);
app.post("/favorites", _add);
app.delete("/favorites", _erase);

app.use(express.json());

export default app;
