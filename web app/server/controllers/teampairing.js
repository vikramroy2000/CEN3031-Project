//import mongoose from 'mongoose';
import group from '../models/groups.js';
export const getGroups = async (req, res) => { 
    try {
        const groups = await group.find();
                
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
