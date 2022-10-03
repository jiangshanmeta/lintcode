class ValidWordAbbr:
    """
    @param: dictionary: a list of words
    """
    # 这题题意不明
    def __init__(self, dictionary):
        self.map = {}
        for word in dictionary :
            abbr = self.word_to_abbr(word)
            if abbr not in self.map :
                self.map[abbr] = set()
            self.map[abbr].add(word)

    def word_to_abbr(self,word):
        if len(word)<2 :
            return word
        
        return word[0] + str(len(word)-2) + word[-1]

    """
    @param: word: a string
    @return: true if its abbreviation is unique or false
    """
    def isUnique(self, word):
        abbr = self.word_to_abbr(word)
        if abbr not in self.map :
            return True
        for word_in_dict in self.map[abbr]:
            if word != word_in_dict :
                return False
        return True
