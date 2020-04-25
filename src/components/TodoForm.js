import React, {useContext, useState} from 'react';
import {TodosContext} from "./TodosProvider";

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {actions: {add}} = useContext(TodosContext)
    let lastTodo = "";
    const postTodo = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/tasks`,
            {
                method: 'post',
                body: JSON.stringify({description: todo}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        return res;
    }
    const handleCreate = async () => {
        const res = await postTodo();
        const todo = await res.json();
        console.log("RES",todo);
        add(todo);
        setTodo("");
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
