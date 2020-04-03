"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param: root: the root of tree
    @return: the max node
    """
    def maxNode(self, root):
        self.result = root
        self.dfs(root)
        return self.result
    
    def dfs(self,node):
        if not node:
            return
        
        if node.val>self.result.val :
            self.result = node
        
        self.dfs(node.left)
        self.dfs(node.right)