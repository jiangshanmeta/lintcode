/**
 * @param words: the given list of words
 * @return: the number of different transformations among all words we have
 */
const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const uniqueMorseRepresentations = function (words) {
    const map = {};
    let count = 0;
    for(let i=0;i<words.length;i++){
        const word = words[i];
        const result = [];
        for(let j=0;j<word.length;j++){
            result.push(codes[word.charCodeAt(j)-97]);
        }
        const code = result.join('');
        if(!map[code]){
            map[code] = true;
            count++;
        }
    }
    return count;
}