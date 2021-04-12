import Student from '../models/student.js';

export const createStudent = async (req, res) => {
    const { first, last, year, product, progExp, IntResIndExp, personality } = req.body;
    const newStudent = new Student({ first, last, year, product, progExp, IntResIndExp, personality });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getStudent = async (req, res) => { 
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getStudents = async (res) => { 
    try {
        const students = await Student.find();
        
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const returnStudents = async () => {
    try {
        const students = await Student.find();

        return students;
    } catch (error) {
        console.log(error.message);
    }
}