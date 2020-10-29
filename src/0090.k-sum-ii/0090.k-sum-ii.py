class Solution:
    """
    @param: A: an integer array
    @param: k: a postive integer <= length(A)
    @param: targer: an integer
    @return: A list of lists of integer
    """
    def kSumII(self, A, k, target):
        self.A = A
        self.k = k
        self.L = len(A)
        result = []
        self.backTracking(0,target,[],result)
        return result
        
    def backTracking(self,index,rest,sequence,result) :
        if rest<= 0 :
            if rest == 0 and len(sequence) == self.k :
                result.append(sequence[:])
            return
        
        while index<self.L :
            sequence.append(self.A[index])
            self.backTracking(index+1,rest-self.A[index],sequence,result)
            sequence.pop()
            index += 1