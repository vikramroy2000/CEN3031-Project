//import express from 'express';
import mongoose from 'mongoose';

import PostProject from '../models/postProject.js';



export const getPosts = async (req, res) => { 
    try {
        const postProjects = await PostProject.find();
                
        res.status(200).json(postProjects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostProject.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, file1, file2, file3, creator } = req.body;

    const newPostProject = new PostProject({ title, message, file1, file2, file3, creator})

    try {
        await newPostProject.save();

        res.status(201).json(newPostProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await PostProject.findByIdAndUpdate(_id, project, { new: true });
    
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostProject.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}
