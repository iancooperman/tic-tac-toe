

export const boardSpaces  = {
    EMPTY: 0,
    X: 1,
    O: 2
}

export class TicTacToe {
    constructor(boardSize) { // initialize the board matrix
        this._board = new Array(boardSize);
        for (let i = 0; i < this._board.length; i++) {
            this._board[i] = Array.from(Array(boardSize), () => boardSpaces.EMPTY);
        }


        this._turn = boardSpaces.X;
        this._moves = new Array();

        this.getSpace = this.space.bind(this);
        this.move = this.move.bind(this);
        this.undo = this.undo.bind(this);
        this.copy = this.clone.bind(this);
        this._switchTurns = this._switchTurns.bind(this);
    }

    get boardSize() {
        return this._board.length;
    }

    get turn() {
        return this._turn
    }

    space(x, y) {
        return this._board[x][y];
    }

    move(x, y) {
        if (x >= this._boardSize) {
            throw "Provided x value exceeds size of Tic-Tac-Toe board!";
        }
        else if (y >= this._boardSize) {
            throw "Provided y value exceeds size of Tic-Tac-Toe board!";
        }
        else if (this._board[x][y] !== boardSpaces.EMPTY) {
            throw "Board location already played!";
        }
        else { // move is acceptable
            // mark the board at specified location
            this._board[x][y] = this._turn;
            // switch turns
            this._switchTurns();
            this._moves.push(new Move(x, y));
        }
    }

    _switchTurns() {
        this._turn = (this._turn === boardSpaces.X) ? boardSpaces.O : boardSpaces.X;
    }


    // TODO: Implement ability to undo arbitrary number of moves. Useful for Mini-Max.
    undo() {
        // If there are no moves to undo, just say so!
        if (this._moves.length === 0) {
            throw "No moves to undo!"
        }

        let previousMove = this._moves.pop();
        let x = previousMove.x;
        let y = previousMove.y;
        this._board[x][y] = boardSpaces.EMPTY;

        this._switchTurns();
    }

    // TODO: Implement a copy-constructor-like method.
    clone() {
        return JSON.parse(JSON.stringify(this));
    }

    // TODO: Implement win checking.
    isWin() {

    }
}

// All this class does is store coordinates for moves taken.
// There's no validation. That happens in `TicTacToe`
class Move {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}