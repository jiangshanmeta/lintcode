class Solution:
    """
    @param A: a string
    @param B: a string
    @return: return the sum of two strings
    """
    def SumofTwoStrings(self, A, B):
        index1 = len(A)-1
        index2 = len(B)-1
        stack = []
        while(index1>-1 and index2>-1) :
            stack.append(str(int(A[index1])+int(B[index2])))
            index1 -= 1
            index2 -= 1

        while index1>-1 :
            stack.append(A[index1])
            index1 -= 1
            
        while index2>-1 :
            stack.append(B[index2])
            index2 -= 1
        
        stack.reverse()
        
        return ''.join(stack)