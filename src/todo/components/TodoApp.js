import {TodoList} from "./TodoList";
import React, {useEffect} from "react";
import {TodoInput} from "./TodoInput";
import {useTodo} from "../providers/use-todo";
import {Container, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import theme from "./theme";

export const TodoApp = () => {
    const {
        todos, OnTodoComponentLoad, OnClickAddTodo, OnClickDeleteTodo,
    } = useTodo()


    useEffect(OnTodoComponentLoad, [])


    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
        <Container  maxWidth="sm">
            <React.Fragment>
                <TodoList todos={todos} handleOnClickDeleteTodo={OnClickDeleteTodo}/>
                <TodoInput handleOnClickAddTodo={OnClickAddTodo}/>
            </React.Fragment>
        </Container>
        </ThemeProvider>
    )
}