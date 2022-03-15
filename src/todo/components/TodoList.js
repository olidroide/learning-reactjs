import {TodoElement} from "./TodoElement";
import {Box, List} from "@mui/material";

export const TodoList = ({todos, handleOnClickDeleteTodo}) => {
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <List>
                {todos.map((todoElement) => (
                    <TodoElement key={todoElement.id} todo={todoElement}
                                 handleOnClickDeleteTodo={handleOnClickDeleteTodo}/>
                ))}
            </List>
        </Box>
    )
}