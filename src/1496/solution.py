class Solution(SolBase):
    def rand10(self) -> int:
        while True:
            row = self.rand7()
            col = self.rand7()
            idx = (row - 1) * 7 + col
            if idx <= 40:
                return 1 + (idx - 1) % 10