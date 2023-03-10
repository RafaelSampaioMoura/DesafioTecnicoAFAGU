import { CityModel } from "../models/favoriteCity.model";

const getAll = async () => {
  const result = await CityModel.findAll();

  return result;
};

const add = async (cityInfo) => {
  const { state, city, lat, lon } = cityInfo;
  const favCity = await CityModel.create({ state, city, lat, lon });

  return favCity;
};

const erase = async (id) => {
  const delCity = await CityModel.destroy({
    where: { id: id },
  });

  return delCity;
};

module.exports = {
  getAll,
  add,
  erase,
};
