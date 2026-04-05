const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/upload');
const ctrl = require('../controllers/adminController.js')

router.use(authMiddleware);

// File upload
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename });
});

// Helper to mount CRUD routes
function mountCrud(path, controller) {
  if (controller.getAll) router.get(`/${path}`, controller.getAll);
  if (controller.getOne) router.get(`/${path}/:id`, controller.getOne);
  if (controller.create) router.post(`/${path}`, controller.create);
  if (controller.update) router.put(`/${path}/:id`, controller.update);
  if (controller.delete) router.delete(`/${path}/:id`, controller.delete);
  if (controller.reorder) router.put(`/${path}-reorder`, controller.reorder);
}

mountCrud('hero-sliders', ctrl.heroSliders);
mountCrud('gallery-images', ctrl.galleryImages);
mountCrud('facilities', ctrl.facilities);
mountCrud('activities', ctrl.activities);
mountCrud('notices', ctrl.notices);

module.exports = router;
