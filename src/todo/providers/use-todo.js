import React, {createContext, useContext, useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
import {useLocalStorageProvider} from "./use-localstorage";

const todoContext = createContext(undefined, undefined);
const TODO_KEY = "todoApps.todos"

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideTodo({children}) {
    return <todoContext.Provider value={useProvideTodo()}>{children}</todoContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useTodo = () => {
    return useContext(todoContext);
};

// Provider hook that creates auth object and handles state
function useProvideTodo() {
    const [todos, setTodos] = useState([])
    const localStorageProvider = useLocalStorageProvider()

    const OnTodoComponentLoad = () => {
        console.log("OnTodoComponentLoad " + [...todos])
        const todosSaved = localStorageProvider.GetValue(TODO_KEY)
        setTodos(todosSaved)
    }

    const OnTodoListChanged = () => {
        console.log("OnTodoListChanged" + [...todos])
        localStorageProvider.SetValue(TODO_KEY, todos)
    }

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

    useEffect(OnTodoListChanged, [todos])

    return {
        todos,
        OnTodoComponentLoad,
        OnClickAddTodo,
        OnClickDeleteTodo,
    }
}