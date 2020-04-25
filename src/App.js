import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodosProvider from "./components/TodosProvider";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <TodosProvider>
                <TodoForm/>
                <TodoList/>
            </TodosProvider>
        </div>
    );
}

export default App;
