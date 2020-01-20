/**
 * @param board: the given board
 * @return: True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game
 */
const validTicTacToe = function (board) {
    let xCount = 0;
    let oCount = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j] === 'X'){
                xCount++;
            }else if(board[i][j] === 'O'){
                oCount++;
            }
        }
    }
    if(xCount>oCount+1 || xCount<oCount){
        return false;
    }

    const xWin = (
        board[0] === 'XXX' || board[1] === 'XXX' || board[2] === 'XXX' ||
        (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') ||
        (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||
        (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') ||
        (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
        (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')
    );

    if(xWin && xCount !== oCount+1){
        return false;
    }
    return true;
}

