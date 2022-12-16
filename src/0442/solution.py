class Trie:
    
    def __init__(self):
        # do intialization if necessary
        self.trie = [0 for _ in range(26)]

    """
    @param: word: a word
    @return: nothing
    """
    def insert(self, word):
        # write your code here
        trie = self.trie
        for letter in word :
            code = ord(letter)-97
            if trie[code] == 0 :
                trie[code] = [0 for _ in range(27)]
            trie = trie[code]
        trie[26] = 1
        
    """
    @param: word: A string
    @return: if the word is in the trie.
    """
    def search(self, word):
        trie = self.trie
        for letter in word :
            code = ord(letter)-97
            if trie[code] == 0:
                return False
            trie = trie[code]
        
        return trie[26] == 1

    """
    @param: prefix: A string
    @return: if there is any word in the trie that starts with the given prefix.
    """
    def startsWith(self, prefix):
        # write your code here
        trie = self.trie
        for letter in prefix :
            code = ord(letter)-97
            if trie[code] == 0 :
                return False
            trie = trie[code]
        return True