const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// get request to get all students page
router.get('/', studentsController.getAllStudents);

// put request to create new student
router.put('/new', studentsController.createStudent);

// get request to see info of a particular student
router.get('/:id', studentsController.getStudentWithId);

// put request to edit the data of a particular student
router.put('/:id/edit', studentsController.editStudent);

// delete request to delete the particular student
router.delete('/:id/delete', studentsController.deleteStudentWithId);

module.exports = router;
