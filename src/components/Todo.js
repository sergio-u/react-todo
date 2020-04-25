import React, {useContext, useEffect, useState} from 'react';
import {TodosContext} from "./TodosProvider";

const Todo = ({todo}) => {
    const {actions: {remove, toggle}} = useContext(TodosContext);
    const {description} = todo;
    const [status, setStatus] = useState(todo.status);

    useEffect(() => {
        const el = document.getElementById(todo.id);
        if (el) {
            if (status === 'pending') {
                el.classList.remove("done");
            } else {
                el.classList.add("done");
            }
        }
    }, [status, todo.id]);

    const handleToggle = async () => {
        console.log(todo.id, " ", description);
        const newStatus = status === 'pending' ? 'done' : 'pending';
        setStatus(newStatus);
        toggle(todo.id, newStatus);
        await fetch(`${process.env.REACT_APP_BACKEND}/tasks/${todo.id}/${newStatus}`,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json'
                }
            });
    }

    const handleDelete = async () => {
        console.log(todo.id, " ", description);
        remove(todo.id);
        await fetch(`${process.env.REACT_APP_BACKEND}/tasks/${todo.id}`,
            {
                method: 'delete',
                headers: {
                    'Accept': 'application/json'
                }
            });

    }

    return (
        <>
            <p>{todo.id}</p>
            <p>{description}</p>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Todo;