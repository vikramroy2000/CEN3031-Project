import mongoose from 'mongoose';

const teamMember = {
    first: {type:String, default: "-"},
    last: {type:String, default: "-"}
}
const groupSchema = mongoose.Schema({
    num: {type: Number, default: 0},
    members: {type: teamMember, default: [
        {first: "-", last: "-"},
        {first: "-", last: "-"},
        {first: "-", last: "-"},
        {first: "-", last: "-"},
        {first: "-", last: "-"}
    ]}
})


const group = mongoose.model('Group', groupSchema);

export default group;