import React, {useRef} from "react";

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
            <input ref={todoInputValueRef} type="text" placeholder="Insert Todo" />
            <button onClick={onClickAdd}>➕</button>
        </React.Fragment>
    )
}