"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""


class Solution:
    """
    @param: root: The root of the binary search tree.
    @param: value: Remove the node with given value.
    @return: The root of the binary search tree after removal.
    """
    def removeNode(self, root, value):
        if root is None :
            return root
        elif root.val == value :
            if root.left and root.right :
                rightMin = root.right
                while rightMin.left :
                    rightMin = rightMin.left
                
                root.val = rightMin.val
                root.right = self.removeNode(root.right,rightMin.val)
                return root
            elif root.left :
                return root.left
            elif root.right :
                return root.right
            else :
                return None
            
        elif root.val>value :
            root.left = self.removeNode(root.left,value)
        else :
            root.right = self.removeNode(root.right,value)
        
        return root