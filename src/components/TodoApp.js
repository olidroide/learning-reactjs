import {v4 as uuid} from "uuid";
import {TodoList} from "./TodoList";
import React, {useEffect, useState} from "react";
import {TodoInput} from "./TodoInput";


export const TodoApp = () => {
    const [todos, setTodos] = useState([{id: 1, value: "learn react"}])

    const OnTodoAppLoad = () => {
        console.log("OnTodoAppLoad" + todos)
    }

    const OnTodoListChanged = () => {
        console.log("OnTodoListChanged" + todos)
    }

    useEffect(OnTodoAppLoad, [])
    useEffect(OnTodoListChanged, [todos])

    const OnClickAddTodo = (todoValue) => {
        console.log("OnClickAddTodo " + todoValue)
        setTodos((previousTodos) => {
            return [...previousTodos, {id: uuid(), value: todoValue}]
        })
    };

    const OnClickDeleteTodo = (id) => {
        console.log("OnClickDeleteTodo " + id)
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
    }


    return (
        <React.Fragment>
            <TodoList todos={todos} handleOnClickDeleteTodo={OnClickDeleteTodo}/>
            <TodoInput handleOnClickAddTodo={OnClickAddTodo}/>
        </React.Fragment>
    )
}