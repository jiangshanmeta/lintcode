class Solution:
    """
    @param x: An integer
    @return: The sqrt of x
    """
    def sqrt(self, x):
        low = 0
        high = x
        result = 0
        while low<=high :
            mid = (low+high)>>1
            if mid**2 > x :
                high = mid-1
            else :
                result = max(result,mid)
                low = mid+1

        return result