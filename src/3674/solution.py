from typing import (
    List,
)

class Solution:
    """
    @param head: Head node of the linked list.
    @return: nothing
    """
    def print_in_reverse(self, head: ImmutableListNode):
        # Using head.print_value() to print the value of current node.
        # Using head.get_next() to get the next node.
        # --- write your code here ---
        if head :
            self.print_in_reverse(head.get_next())
            head.print_value()
