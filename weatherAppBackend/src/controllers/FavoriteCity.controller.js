import { getAll as _getAll, add as _add, erase as _erase } from "../services/FavoriteCity.service";

const getAll = async (_req, res) => {
  try {
    const result = await _getAll();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const add = async (req, res) => {
  try {
    const { body } = req;
    const result = await _add(body);

    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const erase = async (req, res) => {
  try {
    const { id } = req.body;
    await _erase(id);

    return res.status(200).json({ message: "Cidade desfavoritada" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default {
  getAll,
  add,
  erase,
};
