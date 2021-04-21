import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    first: {type: String, default: "-"}, 
    last: {type: String, default: "-"}, 
    year: {type: String, default: "-"}, 
    product: {type: String, default: "-"}, 
    progExp: {type: String, default: "-"}, 
    IntResIndExp: {type: String, default: "-"}, 
    personality: {type:String, default:"-"}
})

const Student = mongoose.model('Student', studentSchema);

export default Student;