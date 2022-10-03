class Solution:
    """
    @param nums: A set of numbers.
    @return: A list of lists. All valid subsets.
    """
    def subsetsWithDup(self, nums):
        nums.sort()
        result = [[]]
        used = [False for i in range(0,len(nums))]
        self.backTracking(nums,used,0,[],result)
        return result

    def backTracking(self,nums,used,index,sequence,result):
        if index == len(nums) :
            return

        while index<len(nums):
            if (index>0) and (nums[index] == nums[index-1]) and (used[index-1] == False) :
                index += 1
                continue
            
            sequence.append(nums[index])
            used[index] = True
            result.append(sequence[:])
            self.backTracking(nums,used,index+1,sequence,result)
            sequence.pop()
            used[index] = False
            index += 1