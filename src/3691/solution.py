from typing import (
    List,
)

class SparseVector:
    # Your SparseVector object will be instantiated and called as such:
    # v1 = SparseVector(nums1)
    # v2 = SparseVector(nums2)
    # ans = v1.dot_product(v2)
    def __init__(self, nums: List[int]):
        self.d = {}
        for key,val in enumerate(nums):
            if val != 0:
                self.d[key] = val
            
        

    # Return the dotProduct of two sparse vectors
    def dot_product(self, vec: "SparseVector") -> int:
        res = 0
        for key,value in self.d.items():
            if key in vec.d:
                res += value*vec.d[key]

        return res