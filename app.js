const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');

const studentsRouter = require('./routes/studentRoutes');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// get request to get the home page
app.get('/api/v1', (req, res) => {
    res.render('home');
});

app.use('/api/v1/students', studentsRouter);

module.exports = app;
