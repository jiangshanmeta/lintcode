"""
Definition of ListNode
class ListNode(object):

    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""


class Solution:
    """
    @param: head: The first node of linked list.
    @param: n: An integer
    @return: Nth to last node of a singly linked list. 
    """
    def nthToLast(self, head, n):
        node1 = head
        node2 = head
        while n>0 :
            n-= 1
            node2 = node2.next
        
        while node2 :
            node1 = node1.next
            node2 = node2.next

        return node1
