"""
Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
"""


class Solution:
    """
    @param: root: The root of the BST.
    @param: p: You need find the successor node of p.
    @return: Successor of p.
    """
    def inorderSuccessor(self, root, p):
        stack = []
        lastIs = False

        while root :
            stack.append(root)
            root = root.left

        while stack :
            root = stack.pop()
            if root == p :
                lastIs = True
            elif lastIs :
                return root
            
            root = root.right

            while root :
                stack.append(root)
                root = root.left
        
        return None
