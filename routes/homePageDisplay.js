const express = require('express');
const app = express();
const router = express.Router();
const indexPage = require('../controllers/indexPage');

router.get("/", indexPage.indexPage);

module.exports = router