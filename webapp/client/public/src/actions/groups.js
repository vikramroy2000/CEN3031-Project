import * as api from '../api';

export const getGroups = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGroups();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }   
};