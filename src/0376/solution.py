"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""


class Solution:
    """
    @param: root: the root of binary tree
    @param: target: An integer
    @return: all valid paths
    """
    def binaryTreePathSum(self, root, target):
        result = []
        root and self.backTracking(root,target,[],0,result)
        return result

    def backTracking(self,root,target,path,add,result):
        path.append(root.val)
        add += root.val
        if add == target and (root.left is None) and (root.right is None):
            result.append(path[:])
        
        root.left and self.backTracking(root.left,target,path,add,result)
        root.right and self.backTracking(root.right,target,path,add,result)
        path.pop()
