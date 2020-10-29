class Solution:
    """
    @param nums: A list of integers
    @return: A list of integers includes the index of the first number and the index of the last number
    """
    def subarraySum(self, nums):
        d = {}
        d[0] = -1
        L = len(nums)
        index = 0
        count = 0
        while index < L :
            count += nums[index]
            if count in d :
                return [d[count]+1,index]
            
            d[count] = index
            index += 1