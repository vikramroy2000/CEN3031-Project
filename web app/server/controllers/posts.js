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
    const { title, message, selectedFile, creator } = req.body;

    const newPostProject = new PostProject({ title, message, selectedFile, creator})

    try {
        await newPostProject.save();

        res.status(201).json(newPostProject );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostProject.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}
