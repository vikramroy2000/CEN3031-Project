import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    file1: String,
    file2: String,
    file3: String
})

const PostProject = mongoose.model('PostProject', postSchema);

export default PostProject;