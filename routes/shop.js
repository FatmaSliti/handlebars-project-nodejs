const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(`shop.js`, adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  //using the templating engine (pug)
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/shop', hasProducts: products.length > 0, activeShop: true, productCss: true}) //the render method allows us to pass in data that should be added to our view
  //the hasProducts key is used for the handlebars templating engine because it dosn't accept any logic in its file (it accepts a single variable (true or false))
});

module.exports = router;
