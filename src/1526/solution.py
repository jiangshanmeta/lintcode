"""
class UndirectedGraphNode:
     def __init__(self, x):
         self.label = x
         self.neighbors = []
"""

class Solution:
    """
    @param root: the tree
    @return: pre order of the tree
    """
    def preorder(self, root):
        # write your code here
        self.result = []
        root and self.preOrderTraversal(root)
        return self.result

    def preOrderTraversal(self,root):
        self.result.append(root.label)
        
        for node in root.neighbors:
            self.preOrderTraversal(node)