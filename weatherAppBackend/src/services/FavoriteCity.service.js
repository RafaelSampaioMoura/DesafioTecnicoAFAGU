const { City } = require("../models");

const getAll = async () => {
  const result = await City.findAll();

  return result;
};

const add = async (cityInfo) => {
  const { state, city, lat, lon } = cityInfo;
  const favCity = await City.create({ state, city, lat, lon });

  return favCity;
};

const erase = async (id) => {
  const delCity = await City.destroy({
    where: { id: id },
  });

  return delCity;
};

module.exports = {
  getAll,
  add,
  erase,
};
