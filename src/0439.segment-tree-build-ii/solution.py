class SegmentTreeNode:
    def __init__(self, start, end, max):
        self.start, self.end, self.max = start, end, max
        self.left, self.right = None, None

class Solution:
    """
    @param A: a list of integer
    @return: The root of Segment Tree
    """
    def build(self, A):
        if len(A) == 0 :
            return None
        
        return self.buildTree(A,0,len(A)-1)
        
    def buildTree(self,A,start,end) :
        if start == end :
            return SegmentTreeNode(start,end,A[start])
        
        mid = (start+end)//2
        leftNode = self.buildTree(A,start,mid)
        rightNode = self.buildTree(A,mid+1,end)

        root = SegmentTreeNode(start,end,max(leftNode.max,rightNode.max))
        root.left = leftNode
        root.right = rightNode
        return root