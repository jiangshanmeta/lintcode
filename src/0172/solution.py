class Solution:
    """
    @param: A: A list of integers
    @param: elem: An integer
    @return: The new length after remove
    """
    def removeElement(self, A, elem):
        L = len(A)
        index = L-1
        
        while index>-1 :
            if A[index] == elem :
                A.pop(index)
                L -= 1
            index -= 1
        return L