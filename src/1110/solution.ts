export class Solution {
    /**
     * @param dict: List[str]
     * @param sentence: a string
     * @return: return a string
     */
    replaceWords (dict: string[], sentence: string): string {
        const trie:any = {};
        for (const str of dict) {
            let prev = trie;
            for (let i = 0; i < str.length; i++) {
                if (!prev[str[i]]) {
                    prev[str[i]] = {
                        __end: false,
                    };
                }
                prev = prev[str[i]];
            }
            prev.__end = true;
        }
        return sentence.split(' ').map((word) => {
            let prev = trie;
            for (let i = 0; i < word.length; i++) {
                if (prev[word[i]]) {
                    if (prev[word[i]].__end) {
                        return word.slice(0, i + 1);
                    }
                    prev = prev[word[i]];
                } else {
                    return word;
                }
            }

            return word;
        }).join(' ');
    }
}
