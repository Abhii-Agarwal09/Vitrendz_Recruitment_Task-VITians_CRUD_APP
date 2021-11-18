const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student must have a name'],
        trim: true,
    },
    registerNumber: {
        type: String,
        unique: true,
        required: [true, 'Student must have a registeration number'],
    },
    dob: {
        type: Date,
        required: [true, 'Student must have a date of birth'],
    },
    department: {
        type: String,
        required: [true, 'Student must be in a department'],
    },
    graduationYear: {
        type: Number,
        required: [true, 'Student must have a graduation year'],
    },
    cgpa: {
        type: Number,
        required: [true, 'Student must have a CGPA'],
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
