class Solution:
    """
    @param A: An integer array
    @return: An integer array
    """
    def singleNumberIII(self, A):
        xors = 0
        for node in A :
            xors ^= node
        
        mask = 1
        while (xors&mask) == 0 :
            mask <<= 1
        
        a = 0
        for node in A :
            if node&mask :
                a ^= node
        
        return [a,xors^a]
