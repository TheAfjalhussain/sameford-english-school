const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ImageGallery', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING(50), defaultValue: 'General' },
    imageUrl: { type: DataTypes.STRING(500), allowNull: false },
    altText: { type: DataTypes.STRING(200) },
    isFeatured: { type: DataTypes.BOOLEAN, defaultValue: false },
    displayOrder: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
};
