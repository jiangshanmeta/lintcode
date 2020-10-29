"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        this.val = val
        this.left, this.right = None, None
"""


class Solution:
    """
    @param: root: The root of the binary tree.
    @param: A: A TreeNode
    @param: B: A TreeNode
    @return: Return the LCA of the two nodes.
    """
    def lowestCommonAncestor3(self, root, A, B):
        if (root is None) or (A is None) or (B is None) :
            return None
         
        pathA = []
        pathB = []
        self.findNode(root,A,pathA)
        self.findNode(root,B,pathB)

        L = min(len(pathA),len(pathB))
        index = 0
        result = None
        while index<L and pathA[index] == pathB[index] :
            result = pathA[index]
            index += 1
        
        return result

    def findNode(self,root,node,path) :
        path.append(root)

        if node == root :
            return True
        
        if (root.left and self.findNode(root.left,node,path)) :
            return True
        
        if (root.right and self.findNode(root.right,node,path)) :
            return True
        
        path.pop()
        return False