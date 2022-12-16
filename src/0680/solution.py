class Solution:
    """
    @param: : a string to be split
    @return: all possible split string array
    """

    def splitString(self, s):
        self.s = s
        self.L = len(s)
        result = []
        self.backTracking(0,[],result)
        return result
        
    def backTracking(self,index,sequence,result):
        if index == self.L :
            result.append(sequence[:])
            return
        
        sequence.append(self.s[index])
        self.backTracking(index+1,sequence,result)
        sequence.pop()
        
        if index+1<self.L :
            sequence.append(self.s[index:index+2])
            self.backTracking(index+2,sequence,result)
            sequence.pop()