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
    @return: The node where the cycle begins. if there is no cycle, return null
    """
    def detectCycle(self, head):
        if head is None :
            return None
        slow = head
        fast = slow.next

        while fast and fast.next and slow != fast :
            slow = slow.next
            fast = fast.next.next

        if slow != fast :
            return None
        # 数出环中有几个节点
        fast = fast.next
        count = 1
        while slow != fast :
            fast = fast.next
            count += 1
        # 都从头开始 快指针先走环中节点个数
        slow = head
        fast = head
        while count :
            fast = fast.next
            count -= 1
        
        while slow != fast :
            slow = slow.next
            fast = fast.next

        return slow