class SegmentTreeNode:
    def __init__(self, start, end, max):
        self.start, self.end, self.max = start, end, max
        self.left = None
        self.right = None

class Solution:
    """
    @param root: The root of segment tree.
    @param start: start value.
    @param end: end value.
    @return: The maximum number in the interval [start, end]
    """
    def query(self, root, start, end):
        if start>end :
            return 0
        
        if start == root.start and end == root.end :
            return root.max
        
        mid = (root.start+root.end)//2
        if start>mid :
            return self.query(root.right,start,end)
        elif end<mid+1 :
            return self.query(root.left,start,end)
        else :
            return max(
                self.query(root.left,start,mid),
                self.query(root.right,mid+1,end)
            )
