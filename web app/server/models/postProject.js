import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
})

const PostProject = mongoose.model('PostProject', postSchema);

export default PostProject;