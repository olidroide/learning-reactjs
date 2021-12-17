export const TodoElement = ({todo, handleOnClickDeleteTodo}) => {
    const {id, value} = todo

    const handleOnClickDelete = () => {
        handleOnClickDeleteTodo(id)
    }

    return (
        <li>
            {value}
            <button onClick={handleOnClickDelete}>❌</button>
        </li>
    )
}