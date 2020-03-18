class Solution:
    """
    @param n: Given the range of numbers
    @param k: Given the numbers of combinations
    @return: All the combinations of k numbers out of 1..n
    """
    def combine(self, n, k):
        candidate = [i+1 for i in range(n)]
        result = []
        self.backTracking(candidate,0,[],result,k)
        return result
        
        
    def backTracking(self,candidate,index,sequence,result,k):
        if len(sequence) == k :
            result.append(sequence[:])
            return
        
        while index<len(candidate) :
            sequence.append(candidate[index])
            self.backTracking(candidate,index+1,sequence,result,k)
            sequence.pop()
            index += 1
