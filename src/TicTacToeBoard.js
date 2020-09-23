import React from 'react';
import TicTacToe from './TicTacToe';
import TicTacToeSpace from './TicTacToeSpace';
import './TicTacToeBoard.css'


class TicTacToeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: props.boardSize,
            board: new TicTacToe(props.boardSize),
        };
    }

    render() {
        return (
            <div className="tic-tac-toe-board">
                <div className="tic-tac-toe-row">
                    <TicTacToeSpace mark={1}/>
                    <TicTacToeSpace mark={2}/>
                    <TicTacToeSpace mark={0}/>
                </div>
                <div className="tic-tac-toe-row">
                    <TicTacToeSpace mark={1}/>
                    <TicTacToeSpace mark={2}/>
                    <TicTacToeSpace mark={0}/>
                </div>
            </div>
        );
    }
}

export default TicTacToeBoard;