class SegmentTreeNode:
    def __init__(self, start, end, max):
        self.start, self.end, self.max = start, end, max
        self.left, self.right = None, None

class Solution:
    """
    @param root: The root of segment tree.
    @param index: index.
    @param value: value
    @return: nothing
    """
    def modify(self, root, index, value):
        if root.start == root.end and root.start == index :
            root.max = value
            return
        
        mid = (root.start+root.end)//2
        if index>mid :
            self.modify(root.right,index,value)
        else :
            self.modify(root.left,index,value)
        
        root.max = max(root.left.max,root.right.max)
