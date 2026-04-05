const {
  HeroSlider, ImageGallery, Facility, Activity, Notice
} = require('../models');

exports.getHeroSliders = async (req, res) => {
  try {
    const sliders = await HeroSlider.findAll({ where: { isActive: true }, order: [['displayOrder', 'ASC']] });
    res.json(sliders);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getGalleryImages = async (req, res) => {
  try {
    const { category } = req.query;
    const where = category && category !== 'All' ? { category } : {};
    const images = await ImageGallery.findAll({ where, order: [['displayOrder', 'ASC']] });
    res.json(images);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getFacilities = async (req, res) => {
  try {
    const facilities = await Facility.findAll({ order: [['displayOrder', 'ASC']] });
    res.json(facilities);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({ order: [['displayOrder', 'ASC']] });
    res.json(activities);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getNotices = async (req, res) => {
  try {
    const { upcoming } = req.query;
    const where = upcoming === 'true' ? { isPast: false } : {};
    const events = await Notice.findAll({ where, order: [['displayOrder', 'ASC']] });
    res.json(events);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

