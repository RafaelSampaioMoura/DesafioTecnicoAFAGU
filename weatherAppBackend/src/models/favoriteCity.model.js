module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    lon: DataTypes.INTEGER,
  });

  return City;
};
