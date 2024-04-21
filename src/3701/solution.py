from lintcode import (
    TreeNode,
)

"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: The root of the binary tree
    @param u: A node in root
    @return: Node value of the right node
    """
    def find_nearest_right_node(self, root: TreeNode, u: TreeNode) -> int:
        if root == None:
            return -1
        list1 = [root]
        while len(list1)>0:
            nList = []
            for i, val in enumerate(list1):
                if val == u:
                    if i == len(list1)-1:
                        return -1
                    return list1[i+1].val
                if val.left != None:
                    nList.append(val.left)
                if val.right != None:
                    nList.append(val.right)
            list1 = nList
        
        return -1