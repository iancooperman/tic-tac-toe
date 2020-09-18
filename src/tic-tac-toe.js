

export const boardSpaces  = {
    EMPTY: 0,
    X: 1,
    O: 2
}

export class TicTacToe {
    constructor(boardSize) {
        this._boardSize = boardSize;

        // initialize the board matrix
        this._board = new Array(this._boardSize);
        for (let i = 0; i < this._board.length; i++) {
            this._board[i] = Array.from(Array(this._boardSize), () => boardSpaces.EMPTY);
        }

        this._turn = boardSpaces.X;

        this.getSpace = this.space.bind(this);
        this.move = this.move.bind(this);
        this.undo = this.undo.bind(this);
        this.copy = this.copy.bind(this);
    }

    get boardSize() {
        return this._boardSize;
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
        else {
            // mark the board at specified location
            this._board[x][y] = this._turn;
            // switch turns
            this._turn = (this._turn === boardSpaces.X) ? boardSpaces.O : boardSpaces.X;
        }
    }


    // TODO: Implement ability to undo arbitrary number of moves. Useful for Mini-Max.
    undo() {

    }

    // TODO: Implement a copy constructor-like method.
    copy() {

    }
}