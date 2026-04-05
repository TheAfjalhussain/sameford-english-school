const router = require('express').Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
const models = require('../models');

// Login page (no auth)
router.get('/login', (req, res) => {
  res.render('admin/login', { layout: false, error: null });
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await models.Admin.findOne({ where: { username } });
    if (!admin || !(await admin.validatePassword(password))) {
      return res.render('admin/login', { layout: false, error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: admin.id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: 'lax' });
    res.redirect('/admin/dashboard');
  } catch (err) {
    res.render('admin/login', { layout: false, error: 'Something went wrong' });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/admin/login');
});

// All routes below require auth
router.use(authMiddleware);

// Dashboard
router.get('/', (req, res) => res.redirect('/admin/dashboard'));

router.get('/dashboard', async (req, res) => {
  try {
    const [ galleryCount] = await Promise.all([
      models.ImageGallery.count()
    ]);
    res.render('admin/dashboard', { admin: req.admin, students, staff, events, unreadContacts, totalContacts, galleryCount, currentPage: 'dashboard' });
  } catch (err) {
    res.render('admin/dashboard', { admin: req.admin, students: 0, staff: 0, events: 0, unreadContacts: 0, totalContacts: 0, galleryCount: 0, currentPage: 'dashboard' });
  }
});

// Generic page renderer
const pages = [
  { path: 'hero-sliders', model: 'HeroSlider', title: 'Hero Sliders' },
  { path: 'gallery', model: 'ImageGallery', title: 'Gallery Images' },
  { path: 'facilities', model: 'Facility', title: 'Facilities' },
  { path: 'activities', model: 'Activity', title: 'Activities' },
  { path: 'Notices', model: 'Notice', title: 'Calendar Events' },
];

pages.forEach(({ path, model, title, include }) => {
  router.get(`/${path}`, async (req, res) => {
    try {
      const queryOptions = { order: [['displayOrder', 'ASC']] };
      if (include) queryOptions.include = include;
      const items = await models[model].findAll(queryOptions);
      res.render('admin/manage', { admin: req.admin, items, title, modelName: model, path, currentPage: path });
    } catch (err) {
      res.render('admin/manage', { admin: req.admin, items: [], title, modelName: model, path, currentPage: path, error: err.message });
    }
  });
});

module.exports = router;
