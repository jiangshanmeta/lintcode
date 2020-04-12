"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: root of the tree
    @param p: the node p
    @param q: the node q
    @return: find the LCA of p and q
    """
    def lowestCommonAncestor(self, root, p, q):
        if p.val>q.val :
            tmp = q
            q = p
            p = tmp


        while True :
            if root.val == p.val or root.val == q.val or (root.val>p.val and root.val<q.val  ) :
                return root
            elif root.val>q.val :
                root = root.left
            else :
                root = root.right