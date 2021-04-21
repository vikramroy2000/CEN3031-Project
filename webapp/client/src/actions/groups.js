import * as api from '../api';

export const getGroups = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGroups();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }   
};

export const createGroups = () => async (dispatch) => {
    try {
        const { data } = await api.createGroups();
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
};