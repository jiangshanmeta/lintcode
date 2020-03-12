class Solution:
    """
    @param A: An integers array.
    @return: return any of peek positions.
    """
    def findPeak(self, A):
        return self.binarySearch(A,0,len(A)-1)
    
    def binarySearch(self,A,low,high) :
        mid = (low+high) >> 1

        if mid == 0 :
            return -1

        if A[mid]>A[mid-1] and A[mid]>A[mid+1] :
            return mid
        elif A[mid]<A[mid+1] and A[mid]>A[mid-1] :
            return self.binarySearch(A,mid+1,high)
        elif A[mid]<A[mid-1] and A[mid]>A[mid+1] :
            return self.binarySearch(A,low,mid-1)
        else :
            left = self.binarySearch(A,low,mid-1)
            if left>-1 :
                return left
            return self.binarySearch(A,mid+1,high)