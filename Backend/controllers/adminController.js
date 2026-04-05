
const models = require('../models');

// Generic CRUD factory
function crudController(modelName, options = {}) {
  const Model = models[modelName];
  const { includes = [], searchFields = [] } = options;

  return {
    getAll: async (req, res) => {
      try {
        const queryOptions = { order: [['displayOrder', 'ASC']] };
        if (includes.length) queryOptions.include = includes;
        const items = await Model.findAll(queryOptions);
        res.json(items);
      } catch (err) { res.status(500).json({ error: err.message }); }
    },

    getOne: async (req, res) => {
      try {
        const queryOptions = { where: { id: req.params.id } };
        if (includes.length) queryOptions.include = includes;
        const item = await Model.findOne(queryOptions);
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        res.json(item);
      } catch (err) { res.status(500).json({ error: err.message }); }
    },

    create: async (req, res) => {
      try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
      } catch (err) { res.status(400).json({ error: err.message }); }
    },

    update: async (req, res) => {
      try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        await item.update(req.body);
        res.json(item);
      } catch (err) { res.status(400).json({ error: err.message }); }
    },

    delete: async (req, res) => {
      try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        await item.destroy();
        res.json({ message: `${modelName} deleted successfully` });
      } catch (err) { res.status(500).json({ error: err.message }); }
    },

    reorder: async (req, res) => {
      try {
        const { items } = req.body; // [{id, displayOrder}]
        for (const { id, displayOrder } of items) {
          await Model.update({ displayOrder }, { where: { id } });
        }
        res.json({ message: 'Reorder successful' });
      } catch (err) { res.status(500).json({ error: err.message }); }
    }
  };
}

// Create controllers for each model
const controllers = {
  heroSliders: crudController('HeroSlider'),
  galleryImages: crudController('ImageGallery'),
  facilities: crudController('Facility'),
  activities: crudController('Activity'),
  notices: crudController('Notice'),

};

module.exports = controllers;
