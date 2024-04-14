from typing import (
    List,
)

class Solution:
    """
    @param arr: array
    @return: return true if it's a complete array, otherwise false
    """
    def is_complete_array(self, arr: List[int]) -> bool:
        N = len(arr)
        s = [False]*(N+1)

        for i in range(len(arr)):
            if arr[i]>N or arr[i]<1 :
                return False
            if s[arr[i]]:
                return False
            s[arr[i]] = True 
        
        return True