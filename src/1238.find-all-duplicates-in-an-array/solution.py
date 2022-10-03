class Solution:
    """
    @param nums: a list of integers
    @return: return a list of integers
    """
    def findDuplicates(self, nums):
        index = 0
        while index<len(nums) :
            if nums[index] == index+1 :
                index += 1
                continue
            
            m = nums[index]
            
            if nums[m-1] == m :
                index += 1
            else :
                nums[index] = nums[m-1]
                nums[m-1] = m
        
        index = 0
        result = []
        while index<len(nums) :
            if nums[index] != index+1 :
                result.append(nums[index])
            
            index += 1
        
        return result