import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String, 
    desc: String,
    creator: String,
    gifs: [String]
});

const PostProject = mongoose.model('PostProject', postSchema);

export default PostProject;