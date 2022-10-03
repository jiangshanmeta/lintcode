"""
Definition of ParentTreeNode:
class ParentTreeNode:
    def __init__(self, val):
        self.val = val
        self.parent, self.left, self.right = None, None, None
"""


class Solution:
    """
    @param: root: The root of the tree
    @param: A: node in the tree
    @param: B: node in the tree
    @return: The lowest common ancestor of A and B
    """
    def lowestCommonAncestorII(self, root, A, B):
        if (root is None) or root == A or root == B :
            return root
        left = self.lowestCommonAncestorII(root.left,A,B)
        right = self.lowestCommonAncestorII(root.right,A,B)

        if(left and right) :
            return root
        elif left :
            return left
        else :
            return right