import favoriteCityService from "../services/FavoriteCity.service";

const getAll = async (req, res) => {
  try {
    const result = await favoriteCityService.getAll();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const add = async (req, res) => {
  try {
    const { body } = req;
    const result = await favoriteCityService.add(body);

    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const erase = async (req, res) => {
  try {
    const { id } = req.body;
    await favoriteCityService.erase(id);

    return res.status(200).json({ message: "Cidade desfavoritada" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAll,
  add,
  erase,
};
