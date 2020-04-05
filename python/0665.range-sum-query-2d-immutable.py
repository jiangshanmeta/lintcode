class NumMatrix:
    """
    @param: matrix: a 2D matrix
    """
    def __init__(self, matrix):
        m = len(matrix)
        n = len(matrix[0])
        rangeSum = []
        rangeSum.append([0 for j in range(n+1)])
        for i in range(1,m+1):
            row = []
            row.append(0)
            rowSum = 0
            for j in range(1,n+1):
                rowSum += matrix[i-1][j-1]
                row.append(rangeSum[i-1][j]+rowSum)
            rangeSum.append(row)
        self.rangeSum = rangeSum

    """
    @param: row1: An integer
    @param: col1: An integer
    @param: row2: An integer
    @param: col2: An integer
    @return: An integer
    """
    def sumRegion(self, row1, col1, row2, col2):
        rangeSum = self.rangeSum
        
        return rangeSum[row2+1][col2+1]+rangeSum[row1][col1]-rangeSum[row2+1][col1]-rangeSum[row1][col2+1]
