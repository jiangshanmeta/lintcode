class Solution:
    """
    @param Spell: The Spell
    @return: nothing
    """
    def holyGrailspell(self, Spell):
        lowerSequence = [False for i in range(26)]
        upperSequence = [False for i in range(26)]
        
        for letter in Spell :
            code = ord(letter)
            if code<97 :
                upperSequence[code-65] = True
            else :
                lowerSequence[code-97] = True
        
        index = 25
        
        while index>-1 :
            if lowerSequence[index] and upperSequence[index] :
                return chr(65+index)
            
            index -= 1    
        