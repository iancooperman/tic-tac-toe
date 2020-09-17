import {TicTacToe, boardSpaces} from "./tic-tac-toe";


test('constructed board size equals inputted board size', () => {
   let board = new TicTacToe(3);
   expect(board.boardSize).toEqual(3);
});

test('board empty on initialization', () => {
   let board = new TicTacToe();
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
         expect(board.getSpace(i, j)).toEqual(boardSpaces.EMPTY);
      }
   }
});
