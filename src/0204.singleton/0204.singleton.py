class Solution:
    instance = None
    # @return: The same instance of this class every time
    @classmethod
    def getInstance(cls):
        if cls.instance is None :
            cls.instance = Solution()
        return cls.instance