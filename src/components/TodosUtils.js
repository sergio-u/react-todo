export const initialState = [
    {
        name: "Create a new task!",
        status: false
    }
]
const ADD = "ADD";
const TOGGLE = "TOGGLE";
const DELETE = "DELETE";

export const todosReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            console.log(state, action);
            return [...state, action.payload.todo];
        case TOGGLE:
            console.log(state, action);
            return state;
        case DELETE:
            console.log(state, action);
            return state;
        default:
            console.log(state, action);
            return state;
    }
}

export const addAction = (name) => (
    {
        type: ADD,
        payload: {
            todo: {
                name: name,
                done: false
            }
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
