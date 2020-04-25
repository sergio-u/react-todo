import React, {useContext, useState} from 'react';
import {TodosContext} from "./TodosProvider";

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {actions: {add}} = useContext(TodosContext)
    let lastTodo = "";
    const postTodo = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/`,
            {
                method: 'post',
                body: JSON.stringify(lastTodo)
            });
        console.log(res);
    }
    const handleCreate = () => {
        add(todo);
        lastTodo = todo;
        setTodo("");
        //postTodo();
    }
    return (
        <div>
            <input type="text"
                   value={todo}
                   placeholder="Todo"
                   onChange={e => setTodo(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default TodoForm;
