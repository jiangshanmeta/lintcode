"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    """
    @param A: An integer list
    @param queries: An query list
    @return: The result list
    """
    def intervalSum(self, A, queries):
        self.segmentTree = [0 for i in range(4*len(A))]
        if A :
            self.buildSegmentTree(0,0,len(A)-1,A)

        result = []
        for query in queries :
            result.append(self.query(0,0,len(A)-1,query.start,query.end))
        
        return result

    def buildSegmentTree(self,treeIndex,left,right,A):
        if left == right :
            self.segmentTree[treeIndex] = A[left]
            return
        mid = (left+right) >> 1
        leftIndex = 2*treeIndex+1
        rightIndex = 2*treeIndex+2

        self.buildSegmentTree(leftIndex,left,mid,A)
        self.buildSegmentTree(rightIndex,mid+1,right,A)

        self.segmentTree[treeIndex] = self.segmentTree[leftIndex]+self.segmentTree[rightIndex]

    def query(self,treeIndex,treeLeft,treeRight,queryLeft,queryRight):
        if treeLeft == queryLeft and treeRight == queryRight :
            return self.segmentTree[treeIndex]
        
        mid = (treeLeft+treeRight) >> 1
        leftIndex = 2*treeIndex+1
        rightIndex = 2*treeIndex+2

        if queryLeft>mid :
            return self.query(rightIndex,mid+1,treeRight,queryLeft,queryRight)
        elif queryRight<mid+1 :
            return self.query(leftIndex,treeLeft,mid,queryLeft,queryRight)
        else :
            return self.query(leftIndex,treeLeft,mid,queryLeft,mid) + self.query(rightIndex,mid+1,treeRight,mid+1,queryRight)