class SegmentTreeNode:
    def __init__(self, start, end, count):
        self.start, self.end, self.count = start, end, count
        self.left, self.right = None, None


class Solution:
    """
    @param: root: The root of segment tree.
    @param: start: start value.
    @param: end: end value.
    @return: The count number in the interval [start, end]
    """
    def query(self, root, start, end):
        # 清理不合法值
        if root is None or start>root.end or end<root.start or start>end :
            return 0
        

        start = max(start,root.start)
        end = min(end,root.end)

        return self.querySegmentTree(root,start,end)

    def querySegmentTree(self,root,start,end) :

        if root.start == start and root.end == end :
            return root.count
        
        mid = (root.start+root.end)//2

        if start>mid :
            return self.querySegmentTree(root.right,start,end)
        elif end<mid+1 :
            return self.querySegmentTree(root.left,start,end)
        
        return self.querySegmentTree(root.left,start,mid)+self.querySegmentTree(root.right,mid+1,end)