const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./models/studentModel');
const students = require('./dev-data/data/studentsData.json');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB connection successful!');
    })
    .catch((err) => {
        console.log('An error occured!');
        console.log(err);
    });

const importData = async () => {
    try {
        await Student.create(students);
        console.log('Data successfully loaded');
    } catch (err) {
        console.log(err);
    }
};

importData();
