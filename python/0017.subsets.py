class Solution:
    """
    @param nums: A set of numbers
    @return: A list of lists
    """
    def subsets(self, nums):
        nums.sort()
        result = [[]]
        self.backTracking(nums,0,[],result)
        return result

    def backTracking(self,nums,index,sequence,result):
        L = len(nums)
        if index == L :
            return
        
        while index<L :
            sequence.append(nums[index])
            result.append(sequence[:])
            self.backTracking(nums,index+1,sequence,result)
            sequence.pop() 
            index += 1