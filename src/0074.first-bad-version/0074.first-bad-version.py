#class SVNRepo:
#    @classmethod
#    def isBadVersion(cls, id)
#        # Run unit tests to check whether verison `id` is a bad version
#        # return true if unit tests passed else false.
# You can use SVNRepo.isBadVersion(10) to check whether version 10 is a 
# bad version.
class Solution:
    """
    @param n: An integer
    @return: An integer which is the first bad version.
    """
    def findFirstBadVersion(self, n):
        low = 1
        result = n
        while(low<=n):
            mid = (low+n)//2
            if(SVNRepo.isBadVersion(mid)) :
                result = min(result,mid)
                n = mid-1
            else :
                low = mid+1

        return result