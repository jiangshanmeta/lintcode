class Solution:
    """
    @param candidates: A list of integers
    @param target: An integer
    @return: A list of lists of integers
    """
    def combinationSum(self, candidates, target):
        # 结果要求每一个list非降序 同时要处理重复数组 所以先排序
        candidates.sort()
        result = []
        self.backTracking(0,target,0,candidates,[],result)
        return result


    def backTracking(self,total,target,index,candidates,sequence,result) :
        if total > target :
            return
        if total == target :
            result.append(sequence[:])
            return
        
        while index<len(candidates) :
            # 处理重复数字问题
            if index>0 and candidates[index] == candidates[index-1] :
                index += 1
                continue

            sequence.append(candidates[index])
            self.backTracking(total+candidates[index],target,index,candidates,sequence,result)
            sequence.pop()
            index += 1
