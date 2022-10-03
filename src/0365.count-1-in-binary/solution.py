class Solution:
    """
    @param: num: An integer
    @return: An integer
    """
    def countOnes(self, num):
        # 转换为32位无符号整数
        num = num & (2**32-1)
        count = 0

        while num :
            count += 1
            num = num & (num-1)

        return count