const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); //initialise the view engine

const app = express();

app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'})) //registers a new templating engine in case we're using a non built-in one (exp: with pug we don't do that) / 'handlebars' is a name of our choice (we should add that name as extension)
app.set('view engine', 'handlebars') //use the handlebars engine for every dynamic template we're trying to render
app.set('views', 'views') //tell express where to find the dynamic views

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'})
});

app.listen(3000);
