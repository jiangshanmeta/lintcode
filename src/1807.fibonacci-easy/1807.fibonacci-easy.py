class Solution:
    """
    @param n: an integer
    @return: an ineger f(n)
    """
    def fibonacci(self, n):
        n -= 1
        if n == 0 :
            return 0
        elif n == 1 :
            return 1
        index = 1
        a = 0
        b = 1
        while index<n :
            c = a+b
            a = b
            b = c
            index += 1
        
        return b