import * as api from '../api';

export const createStudent = (student) => async (dispatch) => {
    try {
        
        const { data } = await api.createStudent(student);
        console.log("hello")
        dispatch({ type: 'CREATE', payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
};


