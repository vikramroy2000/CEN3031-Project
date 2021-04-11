const Todo = (students = [], action) => {
    switch (action.type) {
        case 'CREATE': 
            return [...students, action.payload];
        default:
            return students;
    }
}
export default Todo;