import React from 'react';
import {boardSpaces} from './TicTacToe'


class TicTacToeSpace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: props.mark
        }
    }

    render() {
        let renderMark = (this.state.mark === boardSpaces.X) ? "X" : (this.state.mark === boardSpaces.O) ? "O" : "-";
        return (<h1>{renderMark}</h1>);
    }
}

export default TicTacToeSpace;