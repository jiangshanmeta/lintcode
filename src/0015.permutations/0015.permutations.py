class Solution:
    """
    @param: nums: A list of integers.
    @return: A list of permutations.
    """
    def permute(self, nums):
        used = [False for i in range(len(nums))]
        result = []
        self.backTracking(nums,used,[],result,len(nums))

        return result

    def backTracking(self,nums,used,arr,result,L) :
        if len(arr) == L :
            result.append(arr[:])
            return

        index = 0

        while index<L :
            if used[index] :
                index += 1
                continue
            used[index] = True
            arr.append(nums[index])
            self.backTracking(nums,used,arr,result,L)
            arr.pop()
            used[index] = False
            index += 1
