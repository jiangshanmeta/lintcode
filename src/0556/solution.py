import uuid

class StandardBloomFilter:
    """
    @param: k: An integer
    """
    def __init__(self, k):
        self.size = 500000
        self.bit_array = [0]*self.size

        self.hash_funcs = []
        for _ in range(k):
            salt = str(uuid.uuid4())
            self.hash_funcs.append(lambda x: hash(salt+x))

    """
    @param: word: A string
    @return: nothing
    """
    def add(self, word):
        for hash_func in self.hash_funcs:
            index = hash_func(word)%self.size
            self.bit_array[index] = 1
        
    """
    @param: word: A string
    @return: True if contains word
    """
    def contains(self, word):
        for hash_func in self.hash_funcs:
            index = hash_func(word)%self.size
            if self.bit_array[index] == 0:
                return False
        return True

