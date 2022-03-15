import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton, ListItem, ListItemText} from "@mui/material";


export const TodoElement = ({todo, handleOnClickDeleteTodo}) => {
    const {id, value} = todo

    const handleOnClickDelete = () => {
        handleOnClickDeleteTodo(id)
    }

    return (
        <ListItem
            key={id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleOnClickDelete}>
                    <DeleteIcon/>
                </IconButton>
            }>
            <ListItemText primary={value}/>

        </ListItem>
    )
}