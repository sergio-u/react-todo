import React from "react";
import {useReducer} from "react";
import {todosReducer, initialState, addAction, toggleAction, deleteAction, initialLoadAction} from "./TodosUtils";

const TodosContext = React.createContext();

const TodosProvider = ({children}) => {
    const [todoList, dispatch] = useReducer(todosReducer, initialState);
    const actions = {
        add(todo) {
            dispatch(addAction(todo));
        },
        toggle(todoId, status) {
            dispatch(toggleAction(todoId, status));
        },
        remove(todoId) {
            dispatch(deleteAction(todoId));
        },
        initialLoad(todos) {
            dispatch(initialLoadAction(todos));
        }
    };
    return (
        <TodosContext.Provider value={{todoList, actions}}>
            {children}
        </TodosContext.Provider>
    );
}

export default TodosProvider;
export {TodosContext};


