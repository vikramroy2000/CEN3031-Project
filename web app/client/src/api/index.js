import axios from 'axios';


const url1 = '/projects';
const url2 = '/teampairing';
const url3 = '/teampairing/survey';
export const fetchPosts = () => axios.get(url1);

export const createPost = (newPost) => axios.post(url1, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url1}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url1}/${id}`);


export const fetchGroups = () => axios.get(url2);

export const createStudent = (student) => axios.post(url3, student);