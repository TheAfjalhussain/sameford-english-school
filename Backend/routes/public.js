const router = require('express').Router();
const ctrl = require('../controllers/publicController');

router.get('/hero-sliders', ctrl.getHeroSliders);
router.get('/gallery-images', ctrl.getGalleryImages);
router.get('/facilities', ctrl.getFacilities);
router.get('/activities', ctrl.getActivities);
router.get('/notices', ctrl.getNotices);

module.exports = router;
