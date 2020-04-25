import React, {useContext} from 'react';
import {TodosConsumer, TodosContext} from "./TodosProvider";
import Todo from "./Todo";

const TodoList = () => {
    const {todoList} = useContext(TodosContext);
    console.log(todoList);
    return (
        <ul>
            {todoList.map((todo, i) => (
                <li key={i} id={i}>
                    <Todo id={i} todo={todo}/>
                    </li>)
            )}
        </ul>
    );
};

export default TodoList;