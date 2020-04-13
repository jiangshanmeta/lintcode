class Solution:
    """
    @param n: an integer
    @return: return an integer
    """
    def reverseBits(self, n):
        result = 0
        for i in range(32) :
            # 注意这里 | 的技巧
            result = (result << 1) | (n&1)
            n >>= 1
        return result