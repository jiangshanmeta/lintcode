class ZigzagIterator:
    """
    @param: v1: A 1d vector
    @param: v2: A 1d vector
    """
    def __init__(self, v1, v2):
        self.v1 = v1
        self.v2 = v2
        self.L1 = len(v1)
        self.L2 = len(v2)
        self.index1 = 0
        self.index2 = 0

    """
    @return: An integer
    """
    def next(self):
        if self.index1 == self.L1 :
            val = self.v2[self.index2]
            self.index2 += 1
            return val
        if self.index2 == self.L2 :
            val = self.v1[self.index1]
            self.index1 += 1
            return val
        
        if (self.index1+self.index2)%2 == 0 :
            val = self.v1[self.index1]
            self.index1 += 1
            return val
        else :
            val = self.v2[self.index2]
            self.index2 += 1
            return val
        
        
    """
    @return: True if has next
    """
    def hasNext(self):
        return self.index1<self.L1 or self.index2<self.L2
