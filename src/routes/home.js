const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/registerForm',navigationController.getRegister)

module.exports = router;