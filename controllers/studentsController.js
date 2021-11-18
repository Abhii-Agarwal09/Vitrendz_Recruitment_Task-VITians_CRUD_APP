const Student = require('../models/studentModel');

// get all students
exports.getAllStudents = async (req, res) => {
    // res.render('students/allStudents');
    res.status(200).json({
        success: true,
        data: 'Welcome to all students page',
    });
};

// create new student
exports.createStudent = async (req, res) => {
    res.status(200).json({
        success: true,
        data: 'New student created',
    });
};

// get student by id
exports.getStudentWithId = async (req, res) => {
    res.status(200).json({
        success: true,
        data: `welcome to student information with id ${req.params.id}`,
    });
};

// edit student
exports.editStudent = async (req, res) => {
    res.status(200).json({
        success: true,
        data: `Student data with id ${req.params.id} edited`,
    });
};

// delete student by ID
exports.deleteStudentWithId = async (req, res) => {
    res.status(200).json({
        success: true,
        data: `Student with id ${req.params.id} deleted`,
    });
};
