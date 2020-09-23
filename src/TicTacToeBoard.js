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
        return (
            <div>
                <TicTacToeSpace mark={1}/>
                <TicTacToeSpace mark={2}/>
                <TicTacToeSpace mark={0}/>
            </div>
        );
    }
}

export default TicTacToeBoard;