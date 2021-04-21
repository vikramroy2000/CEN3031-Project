import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    user: { type: String, required: true },
    pass: { type: String, required: true },
    id: { type: String }
})
export default mongoose.model("User", userSchema);