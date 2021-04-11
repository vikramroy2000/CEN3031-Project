import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    first: String, 
    last: String, 
    year: String, 
    product: String, 
    progExp: String, 
    IntResIndExp: String, 
    personality: String
})

const Student = mongoose.model('Student', studentSchema);

export default Student;