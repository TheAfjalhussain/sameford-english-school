const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Notice', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT },
    date: { type: DataTypes.STRING(50) },
    startTime: { type: DataTypes.STRING(20) },
    endTime: { type: DataTypes.STRING(20) },
    category: { type: DataTypes.STRING(50), defaultValue: 'General' },
    displayOrder: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
};
