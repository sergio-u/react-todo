import React, {useContext, useEffect, useState} from 'react';
import {TodosContext} from "./TodosProvider";

const Todo = ({id, todo}) => {
    const {actions: {remove, toggle}} = useContext(TodosContext);
    const {name} = todo;
    const [status, setStatus] = useState(todo.status);

    useEffect(() => {
        const el = document.getElementById(id);
        if (!status) {
            el.classList.remove("done");
        } else {
            el.classList.add("done");
        }
    }, [status]);

    const handleToggle = () => {
        console.log(id, " ", name);
        const newStatus = !status;
        setStatus(newStatus);
        toggle(id, newStatus);
    }

    const handleDelete = () => {
        console.log(id, " ", name);
        remove(id);
    }

    return (
        <>
            <p>{id}</p>
            <p>{name}</p>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Todo;