class Solution:
    """
    @param board: a board
    @param click: the position
    @return: the new board
    """
    def updateBoard(self, board, click):
        ROW = len(board)
        COLUMN = len(board[0])
        self.ROW = ROW
        self.COLUMN = COLUMN
        self.board = board
        index = 0
        while index<ROW :
            board[index] = list(board[index])
            index += 1
        
        if board[click[0]][click[1]] == 'M' :
            board[click[0]][click[1]] = 'X'
        else :
            self.dfs(click[0],click[1])
    
        index = 0
        while index<ROW :
            board[index] = "".join(board[index])
            index += 1
        return board
    
    def dfs(self,x,y) :
        if x<0 or y<0 or x == self.ROW or y == self.COLUMN or self.board[x][y] != 'E':
            return 
        neighbourCount = 0
        for i in range(-1,2):
            newX = x+i
            if newX <0 or newX == self.ROW :
                continue
            
            for j in range(-1,2) :
                newY = y+j
                if newY<0 or newY == self.COLUMN :
                    continue
                
                if self.board[newX][newY] == 'M' :
                    neighbourCount += 1
        if neighbourCount == 0 :
            self.board[x][y] = 'B'
            for i in range(-1,2):
                for j in range(-1,2):
                    self.dfs(x+i,y+j)
        else :
            self.board[x][y] = str(neighbourCount)
        
        
        