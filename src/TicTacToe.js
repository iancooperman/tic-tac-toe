

export const boardSpaces  = {
    EMPTY: 0,
    X: 1,
    O: 2
}

class TicTacToe {
    constructor(boardSize) { // initialize the board matrix
        this._board = new Array(boardSize);
        for (let i = 0; i < this._board.length; i++) {
            this._board[i] = Array.from(Array(boardSize), () => boardSpaces.EMPTY);
        }


        this._turn = boardSpaces.X;
        this._moves = [];

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
            throw new Error("Provided x value exceeds size of Tic-Tac-Toe board!");
        }
        else if (y >= this._boardSize) {
            throw new Error("Provided y value exceeds size of Tic-Tac-ToToe board!");
        }
        else if (this._board[x][y] !== boardSpaces.EMPTY) {
            throw new Error("Board location already played!");
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
            throw new Error("No moves to undo!");
        }

        let previousMove = this._moves.pop();
        let x = previousMove.x;
        let y = previousMove.y;
        this._board[x][y] = boardSpaces.EMPTY;

        this._switchTurns();
    }

    // Probably not the most efficient way, but it should work without needing to write helper methods.
    clone() {
        let clone = new TicTacToe(this.boardSize);
        // replicate all the moves made from the original TicTacToe to the clone
        this._moves.forEach((item, index) => {
            let x = item.x;
            let y = item.y;

            clone.move(x, y);
        });

        return clone;
    }

    // TODO: Implement win checking.
    // Returns 0 if no win, 1 if X won, and 2 if O won.
    isWin() {
        // check rows
        for (let i = 0; i < this._board.length; i++) {
            let rowWin = this.checkRow(i);
            if (rowWin !== 0) {
                return rowWin;
            }
        }

        // check columns
        for (let i = 0; i < this._board.length; i++) {
            let columnWin = this.checkColumn(i);
            if (columnWin !== 0) {
                return columnWin;
            }
        }

        // check diagonals
        let negDiagWin = this.checkNegativeDiagonal();
        if (negDiagWin !== 0) {
            return negDiagWin;
        }

        let posDiagWin = this.checkPositiveDiagonal();
        if (posDiagWin !== 0) {
            return posDiagWin;
        }

        return boardSpaces.EMPTY;
    }

    // Same return values as isWin().
    checkRow(x) {
        for (let i = 0; i < this._board.length - 1; i++) {
            if (this._board[x][i] !== this._board[x][i + 1]) {
                return boardSpaces.EMPTY;
            }
        }

        return this._board[x][0];
    }

    checkColumn(y) {
        for (let i = 0; i < this._board.length - 1; i++) {
            if (this._board[i][y] !== this._board[i + 1][y]) {
                return boardSpaces.EMPTY;
            }
        }

        return this._board[0][y];
    }
    
    checkNegativeDiagonal() {
        for (let i = 0; i < this._board.length - 1; i++) {
            if (this._board[i][i] !== this._board[i + 1][i + 1]) {
                return boardSpaces.EMPTY;
            }
        }

        return this._board[0][0];
    }

    checkPositiveDiagonal() {
        for (let i = 0; i < this._board.length - 1; i++) {
            if (this._board[i][this._board.length - 1 - i] !== this._board[i + 1][this._board.length - 2 - i]) {
                return boardSpaces.EMPTY;
            }
        }

        return this._board[0][this._board.length - 1];
    }

    toString() {
        let rows = [];
        for (let i = 0; i < this._board.length; i++) {
            let rowString = this._board[i].join(' ');
            rows.push(rowString);
        }

        let boardString = rows.join('\n');
        boardString = boardString.replace(/0/g, '-');
        boardString = boardString.replace(/1/g, 'X');
        boardString = boardString.replace(/2/g, 'O');
        return boardString;
    }
}

export default TicTacToe;

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