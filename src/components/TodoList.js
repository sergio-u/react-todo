import React, {useContext, useEffect} from 'react';
import {TodosConsumer, TodosContext} from "./TodosProvider";
import Todo from "./Todo";

const TodoList = () => {
    const {todoList, actions: {initialLoad}} = useContext(TodosContext);
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:3001/tasks",
            {
                headers: {
                    'Accept': 'application/json'
                },
            });
        const data = await res.json()
        console.log("Res: ", data);
        initialLoad(data)
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    console.log(todoList);
    return (
        <>
            {todoList.length > 0 ? (
                    <ul>
                        {todoList.map((todo) => (
                            <li key={todo.id} id={todo.id}>
                                <Todo todo={todo}/>
                            </li>)
                        )}
                    </ul>) :
                <p>No Todos!</p>
            }
        </>
    )
        ;
};

export default TodoList;