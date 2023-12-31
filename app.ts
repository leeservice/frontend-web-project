const express = require("express");
const path = require('path');
const nunjucks = require("nunjucks");
const session = require('express-session')
const app = express();

const appViews = path.join(__dirname, '/views/');

const nunjucksConfig = {
    autoescape: true,
    noCache: true,
    express: app
}

nunjucks.configure(appViews, nunjucksConfig);

app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'NOT HARDCODED SECRET', cookie: { maxAge: 60000}}));

declare module "express-session" {

}

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});

require('./controller/employeeController')(app);
