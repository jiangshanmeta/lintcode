"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: param root: The root of the binary search tree
    @param k1: An integer
    @param k2: An integer
    @return: return: Return all keys that k1<=key<=k2 in ascending order
    """
    def searchRange(self, root, k1, k2):
        result = []
        root and self.searchBST(root,k1,k2,result)
        return result

    def searchBST(self,root,k1,k2,result):
        if root.val>k2 :
            return root.left and self.searchBST(root.left,k1,k2,result)
        elif root.val<k1 :
            return root.right and self.searchBST(root.right,k1,k2,result)
        else :
            root.left and self.searchBST(root.left,k1,k2,result)
            result.append(root.val)
            root.right and self.searchBST(root.right,k1,k2,result)