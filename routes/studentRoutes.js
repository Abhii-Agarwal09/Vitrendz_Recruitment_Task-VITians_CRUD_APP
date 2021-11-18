const express = require('express');
const router = express.Router();

// get request to get all students page
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: 'Welcome to all students page',
    });
});

// put request to create new student
router.put('/new', (req, res) => {
    res.status(200).json({
        success: true,
        data: 'New student created',
    });
});

// get request to see info of a particular student
router.get('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: `welcome to student information with id ${req.params.id}`,
    });
});

// put request to edit the data of a particular student
router.put('/:id/edit', (req, res) => {
    res.status(200).json({
        success: true,
        data: `Student data with id ${req.params.id} edited`,
    });
});

// delete request to delete the particular student
router.delete('/:id/delete', (req, res) => {
    res.status(200).json({
        success: true,
        data: `Student with id ${req.params.id} deletes`,
    });
});