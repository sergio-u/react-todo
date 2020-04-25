export const initialState = [
    {
        description: "Create a new task!",
        status: "pending",
        id:1
    }
]
const ADD = "ADD";
const TOGGLE = "TOGGLE";
const DELETE = "DELETE";
const INITIAL_LOAD = "INITIAL_LOAD";

export const todosReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            console.log(state, action);
            return [action.payload.todo, ...state];
        case INITIAL_LOAD:
            console.log(state, action);
            return [...action.payload.todos];
        case TOGGLE:
            console.log(state, action);
            return state;
        case DELETE:
            console.log("DELETE");
            console.log(state, action);
            return state.filter((todo) => action.payload.todoId !== todo.id);
            return state;
        default:
            console.log(state, action);
            return state;
    }
}

export const addAction = (todo) => (
    {
        type: ADD,
        payload: {
            todo: todo
        }
    }
)


export const initialLoadAction = (todos) => (
    {
        type: INITIAL_LOAD,
        payload: {
            todos: todos
        }
    }
)
export const toggleAction = (todoId, status) => (
    {
        type: TOGGLE,
        payload: {
            todoId,
            status
        }

    }
)
export const deleteAction = (todoId) => (
    {
        type: DELETE,
        payload: {
            todoId
        }
    }
)
