const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

const studentsRouter = require('./routes/studentRoutes');

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// get request to get the home page
app.get('/api/v1', (req, res) => {
    res.render('home');
    res.status(200).json({
        success: true,
        data: 'Welcome to home page',
    });
});

app.use('/api/v1/students', studentsRouter);





module.exports = app;
