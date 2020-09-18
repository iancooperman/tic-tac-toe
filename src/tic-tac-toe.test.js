import {TicTacToe, boardSpaces} from "./tic-tac-toe";


test('constructed board size equals inputted board size', () => {
   let board = new TicTacToe(3);
   expect(board.boardSize).toEqual(3);
});

test('board empty on initialization', () => {
   let board = new TicTacToe(3);
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
         expect(board.space(i, j)).toEqual(boardSpaces.EMPTY);
      }
   }
});

test('board reflects turns taken', () => {
   let board = new TicTacToe(3);
   board.move(0, 0);
   board.move(1, 1);
   board.move(2, 2);
   expect(board.space(0, 0)).toEqual(boardSpaces.X);
   expect(board.space(1, 1)).toEqual(boardSpaces.O);
   expect(board.space(2, 2)).toEqual(boardSpaces.X);
});
