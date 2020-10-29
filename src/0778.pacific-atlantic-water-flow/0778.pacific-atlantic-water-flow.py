class Solution:
    """
    @param matrix: the given matrix
    @return: The list of grid coordinates
    """
    def pacificAtlantic(self, matrix):
        if len(matrix) == 0 :
            return []
        M = len(matrix)
        N = len(matrix[0])
        
        pacific = [ [0]*N for i in range(M) ]
        atlantic = [ [0]*N for i in range(M) ]
        
        for i in range(M):
            self.dfs(i,0,matrix,pacific)
            self.dfs(i,N-1,matrix,atlantic)
        
        for j in range(N):
            self.dfs(0,j,matrix,pacific)
            self.dfs(M-1,j,matrix,atlantic)
        
        result = []
        for i in range(M):
            for j in range(N):
                if pacific[i][j] and atlantic[i][j] :
                    result.append([i,j])
        
        return result
    
    def dfs(self,x,y,matrix,ocean) :
        if ocean[x][y] == 1 :
            return
        ocean[x][y] = 1
        deltas = [1,-1]
        for deltax in deltas :
            newX = x+deltax
            newY = y
            if newX>-1 and newY>-1 and newX<len(matrix) and newY<len(matrix[0]) and matrix[newX][newY]>=matrix[x][y] and ocean[newX][newY] == 0 :
                self.dfs(newX,newY,matrix,ocean)
        
        for deltay in deltas :
            newX = x
            newY = y+deltay            
            if newX>-1 and newY>-1 and newX<len(matrix) and newY<len(matrix[0]) and matrix[newX][newY]>=matrix[x][y] and ocean[newX][newY] == 0 :
                self.dfs(newX,newY,matrix,ocean)

