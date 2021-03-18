import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    leader: String,
    members: [String]
})

const group = mongoose.model('Group', groupSchema);

export default group;