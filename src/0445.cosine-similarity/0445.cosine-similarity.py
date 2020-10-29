from math import sqrt

class Solution:
    """
    @param: A: An integer array
    @param: B: An integer array
    @return: Cosine similarity
    """
    def cosineSimilarity(self, A, B):
        index = 0
        L = len(A)

        ASquare = 0
        BSquare = 0
        AB = 0

        while index<L :
            ASquare += A[index]**2
            BSquare += B[index]**2
            AB += A[index]*B[index]
            index += 1
        
        if ASquare == 0 or BSquare == 0 :
            return 2

        return AB/(sqrt(ASquare)*sqrt(BSquare))
