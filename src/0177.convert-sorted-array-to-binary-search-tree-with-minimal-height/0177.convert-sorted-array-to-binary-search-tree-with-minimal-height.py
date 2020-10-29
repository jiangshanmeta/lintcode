"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""


class Solution:
    """
    @param: A: an integer array
    @return: A tree node
    """
    def sortedArrayToBST(self, A):
        return self.buildTree(A,0,len(A)-1)
        
    def buildTree(self,A,start,end):
        if(start>end):
            return None
        
        mid = (start+end) >> 1
        node = TreeNode(A[mid])
        node.left = self.buildTree(A,start,mid-1)
        node.right = self.buildTree(A,mid+1,end)
        return node