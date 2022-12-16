class Solution:
    """
    @param: A: An integer array
    """
    def __init__(self, A):
        self.segmentTree = [0 for i in range(4*len(A))]
        self.data = A
        if A :
            self.buildSegmentTree(0,0,len(A)-1,A)
        print(self.segmentTree)

    def buildSegmentTree(self,rootIndex,left,right,A) :

        if left == right :
            self.segmentTree[rootIndex] = A[left]
            return
        mid = (left+right) >> 1
        leftIndex = 2*rootIndex+1
        rightIndex = 2*rootIndex+2

        self.buildSegmentTree(leftIndex,left,mid,A)
        self.buildSegmentTree(rightIndex,mid+1,right,A)

        self.segmentTree[rootIndex] = self.segmentTree[leftIndex]+self.segmentTree[rightIndex]

    """
    @param: start: An integer
    @param: end: An integer
    @return: The sum from start to end
    """
    def query(self, start, end):
        return self.querySegmentTree(0,0,len(self.data)-1,start,end)

    def querySegmentTree(self,rootIndex,treeLeft,treeRight,queryLeft,queryRight):
        if treeLeft == queryLeft and treeRight == queryRight :
            return self.segmentTree[rootIndex]
        
        mid = (treeLeft+treeRight) >> 1
        leftIndex = 2*rootIndex+1
        rightIndex = 2*rootIndex+2
        if queryLeft>mid :
            return self.querySegmentTree(rightIndex,mid+1,treeRight,queryLeft,queryRight)
        elif queryRight<mid+1 :
            return self.querySegmentTree(leftIndex,treeLeft,mid,queryLeft,queryRight)
        
        return self.querySegmentTree(leftIndex,treeLeft,mid,queryLeft,mid)+self.querySegmentTree(rightIndex,mid+1,treeRight,mid+1,queryRight)


    """
    @param: index: An integer
    @param: value: An integer
    @return: nothing
    """
    def modify(self, index, value):
        self.data[index] = value
        self.modifySegmentTree(0,0,len(self.data)-1,index,value)

    def modifySegmentTree(self,rootIndex,left,right,index,value) :
        if left == right :
            self.segmentTree[rootIndex] = value
            return
        mid = (left+right) >> 1
        leftIndex = 2*rootIndex+1
        rightIndex = 2*rootIndex+2
        if index>mid :
            self.modifySegmentTree(rightIndex,mid+1,right,index,value)
        else :
            self.modifySegmentTree(leftIndex,left,mid,index,value)

        self.segmentTree[rootIndex] = self.segmentTree[leftIndex]+self.segmentTree[rightIndex]
