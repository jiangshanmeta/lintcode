class NumArray:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.segmentTree = [0 for i in range(len(nums)*4)]
        self.nums = nums
        
        if nums :
            self.buildSegmentTree(0,0,len(nums)-1)
        
    def buildSegmentTree(self,treeRootIndex,treeRangeL,treeRangeR) :
        if treeRangeL == treeRangeR :
            self.segmentTree[treeRootIndex] = self.nums[treeRangeL]
            return
        
        mid = (treeRangeL+treeRangeR) >> 1
        leftIndex = 2*treeRootIndex+1
        rightIndex = 2*treeRootIndex+2
        
        self.buildSegmentTree(leftIndex,treeRangeL,mid)
        self.buildSegmentTree(rightIndex,mid+1,treeRangeR)
        
        self.segmentTree[treeRootIndex] = self.segmentTree[leftIndex]+self.segmentTree[rightIndex]
    

    def update(self, i, val):
        """
        :type i: int
        :type val: int
        :rtype: void
        """
        self.nums[i] = val
        self.updateSegmentTree(0,0,len(self.nums)-1,i,val)
        
    def updateSegmentTree(self,treeRootIndex,treeRangeL,treeRangeR,i,val):
        if treeRangeL == treeRangeR :
            self.segmentTree[treeRootIndex] = val
            return
        
        mid = (treeRangeL+treeRangeR) >> 1
        leftIndex = 2*treeRootIndex+1
        rightIndex = 2*treeRootIndex+2
        if i>mid :
            self.updateSegmentTree(rightIndex,mid+1,treeRangeR,i,val)
        else :
            self.updateSegmentTree(leftIndex,treeRangeL,mid,i,val)
        
        self.segmentTree[treeRootIndex] = self.segmentTree[leftIndex]+self.segmentTree[rightIndex]

    def sumRange(self, i, j):
        """
        :type i: int
        :type j: int
        :rtype: int
        """
        if i>j :
            return 0
        return self.querySegmentTree(0,0,len(self.nums)-1,i,j)
        
        
    def querySegmentTree(self,treeRootIndex,treeRangeL,treeRangeR,queryL,queryR) :
        if treeRangeL == queryL and treeRangeR == queryR :
            return self.segmentTree[treeRootIndex]
            
        mid = (treeRangeL+treeRangeR) >> 1
        leftIndex = 2*treeRootIndex+1
        rightIndex = 2*treeRootIndex+2
        if queryL>mid :
            return self.querySegmentTree(rightIndex,mid+1,treeRangeR,queryL,queryR)
        elif queryR<mid+1 :
            return self.querySegmentTree(leftIndex,treeRangeL,mid,queryL,queryR)
        else :
            return self.querySegmentTree(leftIndex,treeRangeL,mid,queryL,mid)+self.querySegmentTree(rightIndex,mid+1,treeRangeR,mid+1,queryR)
