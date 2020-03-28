class Solution:
    """
    @param: board: board a 2D board containing 'X' and 'O'
    @return: nothing
    """
    def surroundedRegions(self, board):
        if len(board) == 0:
            return
        
        ROW = len(board)
        COLUMN = len(board[0])
        
        for i in range(ROW) :
            self.fill(board,i,0,'W')
            self.fill(board,i,COLUMN-1,'W')
            
        for j in range(COLUMN) :
            self.fill(board,0,j,'W')
            self.fill(board,ROW-1,j,'W')
            
        for i in range(ROW) :
            for j in range(COLUMN):
                if board[i][j] == 'O' :
                    self.fill(board,i,j,'X')
        
        for i in range(ROW) :
            for j in range(COLUMN) :
                if board[i][j] == 'W' :
                    board[i][j] = 'O'
        
    
    # DFS
    def fill(self,board,x,y,target) :
        if x<0 or y<0 or x == len(board) or y == len(board[0]) or board[x][y] != 'O' :
            return
        
        board[x][y] = target
        
        self.fill(board,x-1,y,target)
        self.fill(board,x+1,y,target)
        self.fill(board,x,y+1,target)
        self.fill(board,x,y-1,target)