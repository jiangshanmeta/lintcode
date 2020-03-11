class Solution:
    """
    @param: A: sorted integer array A which has m elements, but size of A is m+n
    @param: m: An integer
    @param: B: sorted integer array B which has n elements
    @param: n: An integer
    @return: nothing
    """
    def mergeSortedArray(self, A, m, B, n):
        # write your code here
        index = m+n-1
        m -= 1
        n -= 1

        while m>-1 and n>-1:
            if(A[m]<B[n]):
                A[index] = B[n]
                n -= 1
                index -= 1
            else :
                A[index] = A[m]
                m -= 1
                index -= 1
        
        while n>-1 :
            A[n] = B[n]
            n -= 1