import React from 'react';
import {boardSpaces} from './TicTacToe'
import './TicTacToeSpace.css'


class TicTacToeSpace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: props.mark
        }
    }

    render() {
        let renderMark = (this.state.mark === boardSpaces.X) ? "X" : (this.state.mark === boardSpaces.O) ? "O" : "-";
        return (<div className="tic-tac-toe-space">{renderMark}</div>);
    }
}

export default TicTacToeSpace;