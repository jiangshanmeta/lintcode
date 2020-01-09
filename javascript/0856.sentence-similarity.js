/**
 * @param words1: a list of string
 * @param words2: a list of string
 * @param pairs: a list of string pairs
 * @return: return a boolean, denote whether two sentences are similar or not
 */
const isSentenceSimilarity = function (words1, words2, pairs) {
    if(words1.length !== words2.length){
        return false;
    }
    const map = {};
    for(let i=0;i<pairs.length;i++){
        (map[pairs[i][0]] || (map[pairs[i][0]] = [])).push(pairs[i][1]);
        (map[pairs[i][1]] || (map[pairs[i][1]] = [])).push(pairs[i][0]);
    }
    for(let i=0;i<words1.length;i++){
        if(words1[i] === words2[i]){
            continue;
        }
        if(!map[words1[i]]){
            return false;
        }
        const list = map[words1[i]];
        if (list.every(word=>words2[i] !== word)){
            return false;
        }
    }
    return true;
}

