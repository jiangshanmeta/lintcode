class Solution:
    """
    @param newTime: new time
    @return: maximum time
    """
    def timeMagic(self, newTime):
        newTime = list(newTime)
        if newTime[0] == '?' :
            if newTime[1] == '?' or int(newTime[1])<4 :
                newTime[0] = '2'
            else :
                newTime[0] = '1'

        if newTime[1] == '?' :
            if int(newTime[0])<2 :
                newTime[1] = '9'
            else :
                newTime[1] = '3'

        if newTime[3] == '?' :
            newTime[3] = '5'

        if newTime[4] == '?' :
            newTime[4] = '9'
    
        return ''.join(newTime)