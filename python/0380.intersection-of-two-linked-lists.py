"""
Definition of ListNode
class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    """
    @param headA: the first list
    @param headB: the second list
    @return: a ListNode
    """
    def getIntersectionNode(self, headA, headB):
        node1 = headA
        node2 = headB
        count1 = 0
        count2 = 0

        while node1 :
            count1 += 1
            node1 = node1.next
        
        while node2 :
            count2 += 1
            node2 = node2.next

        node1 = headA
        node2 = headB
        while count1>count2 :
            node1 = node1.next
            count1 -= 1
        
        while count1<count2 :
            node2 = node2.next
            count2 -= 1

        while node1 != node2 :
            node1 = node1.next
            node2 = node2.next
        
        return node1