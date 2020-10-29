class Solution:
    """
    @param: :  A list of integers
    @return: A list of unique permutations
    """

    def permuteUnique(self, nums):
        nums.sort()
        used = [False for i in range(len(nums))]
        result = []
        self.backTracking(nums,used,[],result)
        return result
        
    def backTracking(self,nums,used,sequence,result):
        if len(sequence) == len(nums) :
            result.append(sequence[:])
            return
        index = 0
        while index<len(nums) :
            if used[index] or (index>0 and nums[index-1] == nums[index] and used[index-1] == False) :
                index += 1
                continue
            
            sequence.append(nums[index])
            used[index] = True
            self.backTracking(nums,used,sequence,result)
            sequence.pop()
            used[index] = False
            index += 1