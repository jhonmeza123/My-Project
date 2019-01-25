const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index.html', { title: 'EndMode' });
});

router.get('/login', (req, res) => {
  res.render('login.html', { title: 'Login Page' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Registry Page' });
});

module.exports = router;
