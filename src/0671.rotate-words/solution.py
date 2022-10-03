class Solution:
    """
    @param: words: A list of words
    @return: Return how many different rotate words
    """
    def countRotateWords(self, words):
        hashSet = set()
        for w in words :
            s = w*2
            
            for i in range(len(w)) :
                sub = s[i:i+len(w)]
                # 保证一组循环单词只有一个存在于hashSet中
                if sub in hashSet :
                    hashSet.remove(sub)
                    break
            
            hashSet.add(w)
        
        return len(hashSet)