import {TodoList} from "./TodoList";
import React, {useEffect} from "react";
import {TodoInput} from "./TodoInput";
import {useTodo} from "../providers/use-todo";

export const TodoApp = () => {
    const {
        todos, OnTodoComponentLoad, OnClickAddTodo, OnClickDeleteTodo,
    } = useTodo()


    useEffect(OnTodoComponentLoad, [])


    return (
        <React.Fragment>
            <TodoList todos={todos} handleOnClickDeleteTodo={OnClickDeleteTodo}/>
            <TodoInput handleOnClickAddTodo={OnClickAddTodo}/>
        </React.Fragment>
    )
}