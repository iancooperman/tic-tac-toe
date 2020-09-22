import React from 'react';
import TicTacToe from './TicTacToe';


class TicTacToeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: props.boardSize,
            board: new TicTacToe(props.boardSize)
        };
    }

    render() {
        return (<p>{this.state.board.toString()}</p>);
    }
}

export default TicTacToeBoard;