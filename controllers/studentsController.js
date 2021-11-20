const Student = require('../models/studentModel');

// get all students
exports.getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.render('students/allStudents', { students });
};

// create new student
exports.renderCreateStudentForm = async (req, res) => {
    res.render('students/newStudent');
};

exports.createStudent = async (req, res) => {
    const student = new Student(req.body.student);
    await student.save();
    res.redirect(`/api/v1/students/${student._id}`);
};

// get student by id
exports.getStudentWithId = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.render('students/viewStudentDetails', { student });
};

// render edit student form
exports.renderEditStudentForm = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.render('students/editStudentform', { student });
};

// edit student
exports.editStudent = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body.student);
    res.redirect(`/api/v1/students/${student._id}`);
};

// delete student by ID
exports.deleteStudentWithId = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect('/api/v1/students');
};
