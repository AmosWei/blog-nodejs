const path = require('path');

const express = require('express');


const router = express.Router();

const blogs = [];


// /admin/add-product => GET
router.get('/add-blog', (req, res, next) => {
  res.render('add-blog', {
    pageTitle: 'Add Blog',
    path: '/admin/add-blog'
  });
});

// /admin/add-product => POST
router.post('/add-blog', (req, res, next) => {
  blogs.push({ 
    title: req.body.title,
    content: req.body.content  //add content
  });
  console.log(blogs)
  res.redirect('/');
});

exports.routes = router;
exports.blogs = blogs;
