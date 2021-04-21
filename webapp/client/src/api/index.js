import axios from 'axios';

// change baseURL to wherever server is hosted
const API = axios.create({ baseURL: "https://cen3031webapp.herokuapp.com" });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// })

const url1 = '/getprojects';
const url2 = '/getteampairing';
const url3 = '/teampairing/survey/getstudents';
export const fetchPosts = () => API.get(url1);

export const createPost = (newPost) => API.post(url1, newPost);
export const updatePost = (id, updatedPost) => API.patch(`${url1}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${url1}/${id}`);

export const createGroups = () => API.get("/maketeampairing");
export const fetchGroups = () => API.get(url2);


export const createStudent = (student) => API.post(url3, student);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);