import mongoose from 'mongoose';
import Student from './student.js';


const groupSchema = mongoose.Schema({
    num: {type: Number, default: 0},
    members: []
})


const group = mongoose.model('Group', groupSchema);

export default group;