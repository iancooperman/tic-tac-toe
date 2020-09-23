import React from 'react';
import TicTacToe from './TicTacToe';
import TicTacToeSpace from './TicTacToeSpace';


class TicTacToeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: props.boardSize,
            board: new TicTacToe(props.boardSize)
        };
    }

    render() {
        return (<TicTacToeSpace mark={2}/>);
    }
}

export default TicTacToeBoard;