class Solution:
    """
    @param x {float}: the base number
    @param n {int}: the power number
    @return {float}: the result
    """
    def myPow(self, x, n):
        if n == 0 :
            return 1
        if x == 0 :
            return 0
        
        if n<0 :
            x = 1/x
            n = -n
        
        result = 1

        while n :
            if n&1 :
                result *= x
            
            n >>= 1
            x *= x

        return result