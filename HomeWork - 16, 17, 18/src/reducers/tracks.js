export default function toDoList(state = [], action) {

    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'FIND_TODO') {

        let currentTodo = state.find(findTodo);
        if (currentTodo.show === '') {
            currentTodo.show = 'none'
        } else {
            currentTodo.show = '';
        }

        return [
            ...state
        ]
    } else if (action.type === 'DELETE_TICKET') {

        let currentTodo = state.find(findTodo);
        state.splice(find(state, currentTodo), 1);

        return [
            ...state
        ]
    } else if (action.type === 'EDIT_SHOW') {

        let currentTodo = state.find(findTodo);
        if (currentTodo.editShow === '') {
            currentTodo.editShow = 'none'
        } else {
            currentTodo.editShow = '';
        }

        return [
            ...state
        ]
    } else if (action.type === 'SHOW_ALL') {

        let currentTodo = state.find(findTodo);
        if (currentTodo.showAll === '') {
            currentTodo.showAll = 'none'
        } else {
            currentTodo.showAll = '';
        }

        return [
            ...state
        ]
    }else if (action.type === 'EDIT_TICKET') {
        function findTodoId(todo) {
            return todo._id === action.payload._id;
        }

        let currentTodo = state.find(findTodoId);

        state.splice(find(state, currentTodo), 1,action.payload);
        return [
            ...state
        ]}

    else if (action.type === 'ADD_ID') {
        state[state.length-1]._id = action.payload;
        return [
            ...state
        ]
    }

    return state;

    function findTodo(todo) {
        return todo._id === action.payload;
    }
    function find(array, value) {
        return array.indexOf(value);
    }

}