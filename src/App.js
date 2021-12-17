/*import './App.css';*/

import React from "react";
import {TodoApp} from "./components/TodoApp";
import {ProvideTodo} from "./providers/use-todo";

const App = () => {
    return (
        <ProvideTodo>
            <TodoApp/>
        </ProvideTodo>
    )
};

export default App;
