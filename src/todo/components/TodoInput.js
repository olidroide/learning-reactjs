import React, {useRef} from "react";
import {IconButton, Input, TextField} from "@mui/material";
import {AddCircle} from "@mui/icons-material";

export const TodoInput = ({handleOnClickAddTodo}) => {
    const todoInputValueRef = useRef();

    const onClickAdd = () => {
        console.log("onClickAdd")
        const todoNewValue = todoInputValueRef.current.value;
        if (todoNewValue === '') return;
        console.log("onClickAdd "+todoNewValue)
        handleOnClickAddTodo(todoNewValue);
        todoInputValueRef.current.value = null;
    };



    return (
        <React.Fragment>
            <Input inputRef={todoInputValueRef} placeholder="Insert Todo" inputProps={{ 'aria-label': 'description' }} />
            <IconButton color="primary" onClick={onClickAdd}><AddCircle /></IconButton>
        </React.Fragment>
    )
}