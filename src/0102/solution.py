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
    @return: True if it has a cycle, or false
    """
    def hasCycle(self, head):
        if head is None :
            return False
        
        slow = head
        fast = head.next
        while fast and fast.next and slow != fast :
            slow = slow.next
            fast = fast.next.next

        return fast == slow