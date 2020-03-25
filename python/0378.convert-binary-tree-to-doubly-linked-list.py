"""
Definition of Doubly-ListNode
class DoublyListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = self.prev = nextDefinition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""

class Solution:
    """
    @param root: The root of tree
    @return: the head of doubly list node
    """
    def bstToDoublyList(self, root):
        if root is None :
            return None

        dummyHead = DoublyListNode(0)
        last = dummyHead
        stack = []
        while root :
            stack.append(root)
            root = root.left

        while len(stack) :
            treeNode = stack.pop()
            listNode = DoublyListNode(treeNode.val)
            listNode.prev = last
            last.next = listNode
            last = listNode

            treeNode = treeNode.right
            while treeNode :
                stack.append(treeNode)
                treeNode = treeNode.left
        
        dummyHead = dummyHead.next
        dummyHead.prev = None
        return dummyHead


