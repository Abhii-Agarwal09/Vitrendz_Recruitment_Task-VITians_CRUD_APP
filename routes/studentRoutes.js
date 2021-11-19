const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// get request to get all students page
router.get('/', studentsController.getAllStudents);

// put request to create new student
router.post('/new', studentsController.createStudent);

// get student with id, edit student, delete student
router
    .route('/:id')
    .get(studentsController.getStudentWithId)
    .put(studentsController.editStudent)
    .delete(studentsController.deleteStudentWithId);

module.exports = router;
