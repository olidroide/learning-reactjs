/*import './App.css';*/

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TodoApp} from "./todo/components/TodoApp";
import {ProvideTodo} from "./todo/providers/use-todo";
import Game from "./tictactoe/components/Game";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProvideTodo><TodoApp/></ProvideTodo>}/>
                <Route path="/tictactoe" element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
