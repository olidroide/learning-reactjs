import Square from "./Square";


const style = {
    border: '4px solid blue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'
}

const Board = ({board, handleClick}) => {

    function renderSquare(square, i) {
        return <Square key={i} value={square} onPlayerClick={() => handleClick(i)}/>
    }

    return (
        <div style={style}>
            {board.map((square, i) => renderSquare(square, i))}
        </div>
    )
}


export default Board;

