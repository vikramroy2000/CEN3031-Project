const Todo = (groups = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        default:
            return groups;
    }
};
export default Todo;