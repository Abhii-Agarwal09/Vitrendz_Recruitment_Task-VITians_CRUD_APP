const Student = require('../models/studentModel');

// get all students
exports.getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.status(200).json({
        success: true,
        message: 'Welcome to all students page',
        data: students,
    });
};

// create new student
exports.createStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(200).json({
        success: true,
        data: 'New student created',
    });
};

// get student by id
exports.getStudentWithId = async (req, res) => {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    res.status(200).json({
        success: true,
        message: `welcome to student information with id ${req.params.id}`,
        data: student,
    });
};

// edit student
exports.editStudent = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body);
    res.status(200).json({
        success: true,
        message: `Student data with id ${req.params.id} edited`,
        data: student,
    });
};

// delete student by ID
exports.deleteStudentWithId = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: `Student with id ${req.params.id} deleted`,
    });
};
