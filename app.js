const express = require('express');
const app = express();

const studentsRouter = require('./routes/studentRoutes');

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


// get request to get the home page
app.get('/api/v1', (req, res) => {
    res.status(200).json({
        success: true,
        data: 'Welcome to home page',
    });
});

app.use('/api/v1/students', studentsRouter);





module.exports = app;
