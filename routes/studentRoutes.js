const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// get request to get all students page
router.get('/', studentsController.getAllStudents);

router.post('/', studentsController.createStudent);

// put request to create new student
router.get('/new', studentsController.renderCreateStudentForm);

// get student with id, edit student, delete student
router
    .route('/:id')
    .get(studentsController.getStudentWithId)
    .put(studentsController.editStudent)
    .delete(studentsController.deleteStudentWithId);

router.get('/:id/edit', studentsController.renderEditStudentForm);

module.exports = router;
