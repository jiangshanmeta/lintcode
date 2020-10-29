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
    @return: collect and remove all leaves
    """
    def findLeaves(self, root):
        # write your code here
        self.result = []
        self.helper(root)
        return self.result
    
    def helper(self,node):
        if not node:
            return 0
        
        height = max(self.helper(node.left),self.helper(node.right))+1
        if len(self.result)<height :
            self.result.append([])
        
        self.result[height-1].append(node.val)

        return height


