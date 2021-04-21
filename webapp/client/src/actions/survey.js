import * as api from '../api';

export const createStudent = (student, history) => async (dispatch) => {
    try {
        
        const { data } = await api.createStudent(student);
        dispatch({ type: 'CREATE', payload: data });
        history.push('/teampairing');
        
    } catch (error) {
        console.log(error.message);
    }
};


