import PropTypes from "prop-types";

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none'
}


const Square = ({value, onPlayerClick}) => {
    return (
        <button style={style} onClick={onPlayerClick}>
            {value}
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onPlayerClick: PropTypes.func.isRequired,
}

export default Square;