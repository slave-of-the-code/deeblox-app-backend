const { Router } = require('express');
const { sendEmail, testGet } = require('../controllers/email.controller');
const router = Router();

router.route('/').get(testGet);
router.route('/').post(sendEmail);

module.exports = router;
