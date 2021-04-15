import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    mem1: String,
    mem2: String,
    mem3: String,
    mem4: String,
    mem5: {type: String, default: "unnamed"},
    num: String
})

const group = mongoose.model('Group', groupSchema);

export default group;