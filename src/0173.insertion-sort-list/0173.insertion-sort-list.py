"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    """
    @param head: The first node of linked list.
    @return: The head of linked list.
    """
    def insertionSortList(self, head):
        dummyHead = ListNode(0)
        while head :
            nextHead = head.next
            prev = dummyHead
            while prev.next and prev.next.val<head.val :
                prev = prev.next
            head.next = prev.next
            prev.next = head 
            head = nextHead

        return dummyHead.next
