class Trie:
    def __init__(self):
        self.child = {}
        self.count = 0
        self.word_count = 0

    def search(self, word):
        cur = self
        for s in word:
            cur = cur.child[s]
        return cur
    
    def add(self, word, x):
        cur = self
        for s in word:
            if s not in cur.child:
                cur.child[s] = Trie()
            cur = cur.child[s]
            cur.count += x
        cur.word_count += x

    def insert(self, word: str):
        self.add(word, 1)

    def count_words_equal_to(self, word: str) -> int:
        return self.search(word).word_count

    def count_words_starting_with(self, prefix: str) -> int:
        return self.search(prefix).count

    def erase(self, word: str):
        self.add(word, -1)