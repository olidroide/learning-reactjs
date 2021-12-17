import {TodoElement} from "./TodoElement";

export const TodoList = ({todos, handleOnClickDeleteTodo}) => {
    return (
        <ul>
            {todos.map((todoElement) => (
                <TodoElement key={todoElement.id} todo={todoElement} handleOnClickDeleteTodo={handleOnClickDeleteTodo}/>
            ))}
        </ul>
    )
}