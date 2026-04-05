const sequelize = require('../config/database');

const Admin = require('./Admin')(sequelize);
const HeroSlider = require('./HeroSlider')(sequelize);
const ImageGallery = require('./ImageGallery')(sequelize);
const Facility = require('./Facility')(sequelize);
const Activity = require('./Activity')(sequelize);
const Notice = require('./Notice')(sequelize);


const models = {
  Admin, HeroSlider, ImageGallery, Facility,Activity, Notice, 
};

// Run associations
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models };
