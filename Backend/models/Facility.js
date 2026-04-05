const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Facility', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING(50), defaultValue: 'General' },
    title: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.TEXT },
    imageUrl: { type: DataTypes.STRING(500) },
    displayOrder: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
};
