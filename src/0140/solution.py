# https://oi-wiki.org/math/quick-pow/ 快速幂

class Solution:
    """
    @param a: A 32bit integer
    @param b: A 32bit integer
    @param n: A 32bit integer
    @return: An integer
    """
    def fastPower(self, a, b, n):
        if a == 0 and b == 0 :
            return 1
        
        a %= b
        result = 1
        while n :
            if (n&1) :
                result = result*a%b
            
            n >>= 1
            a = a*a%b

        return result%b
