"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        this.val = val
        this.left, this.right = None, None
Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
"""
class Solution:
    # @param {TreeNode} root the root of binary tree
    # @return {ListNode[]} a lists of linked list
    def binaryTreeToLists(self, root):
        self.dummyHead = ListNode(0)
        result = []
        root and self.levelOrderTravelsal([root],result)
        return result

    def levelOrderTravelsal(self,lastLevel,result):
        last = self.dummyHead
        nextLevel = []
        for node in lastLevel :
            last.next = ListNode(node.val)
            last = last.next
            node.left and nextLevel.append(node.left)
            node.right and nextLevel.append(node.right)
        
        result.append(self.dummyHead.next)
        len(nextLevel)>0 and self.levelOrderTravelsal(nextLevel,result)