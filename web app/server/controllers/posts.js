import PostProject from '../models/postProject.js';

export const getPosts = async (req, res) => {
    try {
        const postProjects = await PostProject.find();

        res.status(200).json(postProjects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostProject(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};