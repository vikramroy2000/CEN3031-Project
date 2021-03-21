import axios from 'axios';

const url1 = 'http://localhost:5000/projects';
const url2 = 'http://localhost:5000/teampairing';
export const fetchPosts = () => axios.get(url1);
export const createPost = (newPost) => axios.post(url1, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url1}/${id}`, updatedPost);

export const fetchGroups = () => axios.get(url2);