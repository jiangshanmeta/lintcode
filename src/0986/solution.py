class Solution:
    """
    @param board: the given 2D board
    @return: the number of battle ships
    """
    def countBattleships(self, board):
        M = len(board)
        N = len(board[0])

        i = 0
        j = 0
        count = 0
        while i<M :
            j = 0
            while j<N :
                if board[i][j] == 'X' :
                    count += 1

                    if j<N-1 and board[i][j+1] == 'X' :
                        k = j+1
                        while k<N and board[i][k] == 'X' :
                            board[i][k] = '.'
                            k += 1
                    elif i<M-1 and board[i+1][j] == 'X' :
                        k = i+1
                        while k<M and board[k][j] == 'X' :
                            board[k][j] = '.'
                            k += 1

                j += 1
            
            i += 1

        return count