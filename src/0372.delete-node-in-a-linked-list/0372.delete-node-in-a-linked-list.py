"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""


class Solution:
    """
    @param: node: the node in the list should be deleted
    @return: nothing
    """
    def deleteNode(self, node):
        if node is None :
            return node
        node.val = node.next.val
        node.next = node.next.next