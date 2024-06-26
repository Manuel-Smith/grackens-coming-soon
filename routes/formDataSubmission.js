const express = require('express')
const app = express();
const router = express.Router();
const userRegister = require('../controllers/registerForm');


router.post("/", userRegister.userRegister)

module.exports = router