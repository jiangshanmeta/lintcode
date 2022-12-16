class Solution:
    """
    @param: nums: Given an integers array A
    @return: A long long array B and B[i]= A[0] * ... * A[i-1] * A[i+1] * ... * A[n-1]
    """
    def productExcludeItself(self, nums):
        L = len(nums)
        lefts = [1 for i in range(L)]
        rights = [1 for i in range(L)]
        index = 1
        left = nums[0]
        while index<L :
            lefts[index] = left
            left *= nums[index]
            index += 1

        right = nums[L-1]
        index = L-2
        while index>-1 :
            rights[index] = right
            right *= nums[index]
            index -= 1
        
        result = []
        index = 0
        while index<L :
            result.append(lefts[index]*rights[index])
            index += 1
        
        return result