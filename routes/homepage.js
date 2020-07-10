const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const blogs = adminData.blogs;
  res.render('homepage', {
    blgs: blogs,
    pageTitle: 'Homepage',
    path: '/'
  });
});

module.exports = router;
