import Board from "./Board";
import {useReducer} from "react";
import {Player} from "./Player";
import Timer from "./Timer";
import {calculateWinner} from "../helpers";


const styles = {
    width: '200px',
    margin: '20px auto'
}


function reducer(state, action) {
    let {board, players, currentPlayer, winner} = state;
    switch (action.type) {
        case "handleClick":
            console.log(action.type)
            //board = board.slice();
            board[action.index] = players[currentPlayer].icon;
            winner = calculateWinner(board) != null ? players[currentPlayer] : winner;
            if (winner == null) {
                currentPlayer = currentPlayer + 1 >= players.length ? 0 : currentPlayer + 1;
                console.log("reducer.currentPlayer " + currentPlayer);
            } else {
                console.log('Winner is: ' + winner.icon)
            }


            return {
                board,
                players,
                currentPlayer,
                winner,
            };
        default:
            throw new Error();
    }
}

const initialState = {
    board: new Array(9).fill(null),
    players: [Player('❌'), Player('⭕')],
    currentPlayer: 0,
    winner: null,
};


const Game = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleClick(i) {
        if (state.winner) return;
        dispatch({type: "handleClick", index: i});
    }

    const currentTurn = () => {
        console.log('currentTurn ' + state.players[state.currentPlayer].icon);
        return state.players[state.currentPlayer].icon
    }
    const gameOver = () => {
        console.log('Game Over. Winner is: ' + state.winner.icon)
        return state.winner.icon
    }


    return (
        //fragment
        <>
            <Board board={state.board} handleClick={handleClick}/>
            <div style={styles}>
                <Timer/>
                <p>{state.winner != null ? gameOver() : currentTurn()}</p>
                {/*{restartGame()}*/}
            </div>
        </>
    )
}

export default Game;
