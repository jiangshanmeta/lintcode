class Solution:
    """
    @param num: Given the candidate numbers
    @param target: Given the target number
    @return: All the combinations that sum to target
    """
    def combinationSum2(self, num, target):
        used = [False for i in range(len(num))]
        num.sort()
        result = []
        self.backTracking(num,[],result,target,0,used)
        return result
        
    def backTracking(self,nums,sequence,result,rest,index,used):
        if rest == 0 :
            result.append(sequence[:])
        
        # nums 中都是正数
        if rest<=0 :
            return
        
        while index<len(nums) :
            # 要处理重复的
            if index>0 and nums[index-1] == nums[index] and used[index-1] == False :
                index += 1
                continue
                                
            sequence.append(nums[index])
            used[index] = True
            self.backTracking(nums,sequence,result,rest-nums[index],index+1,used)
            sequence.pop()
            used[index] = False
            index += 1
            