const path = require('path');

const express = require('express');


const router = express.Router();

const blogs = [];

// /admin/add-product => GET
router.get('/add-blog', (req, res, next) => {
  res.render('add-blog', {
    pageTitle: 'Add Blog',
    path: '/admin/add-blog',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-blog', (req, res, next) => {
  blogs.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.blogs = blogs;
