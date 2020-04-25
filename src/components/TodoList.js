import React, {useContext, useEffect, useState} from 'react';
import {TodosConsumer, TodosContext} from "./TodosProvider";
import Todo from "./Todo";

const TodoList = () => {
    const {todoList, actions: {initialLoad}} = useContext(TodosContext);
    const [loaded, setLoaded] = useState(false);
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
        setLoaded(true);
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    console.log(todoList);
    return (
        <>
            {loaded ? (
                <>{
                    todoList.length > 0 ? (
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
            ) : <p>Loading...</p>}
        </>
    )
        ;
};

export default TodoList;