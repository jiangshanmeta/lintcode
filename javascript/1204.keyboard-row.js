/**
 * @param words: a list of strings
 * @return: return a list of strings
 */
const findWords = function (words) {
    const rows = [
        {
            'q':true,
            'w':true,
            'e':true,
            'r':true,
            't':true,
            'y':true,
            'u':true,
            'i':true,
            'o':true,
            'p':true,
        },
        {
            'a':true,
            's':true,
            'd':true,
            'f':true,
            'g':true,
            'h':true,
            'j':true,
            'k':true,
            'l':true,
        },
        {
            'z':true,
            'x':true,
            'c':true,
            'v':true,
            'b':true,
            'n':true,
            'm':true,
        }
    ];

    const result = [];
    for(let i=0;i<words.length;i++){
        const word = words[i].toLowerCase();
        let row;
        for(let j=0;j<3;j++){
            if(rows[j][word[0]]){
                row = rows[j];
                break;
            }
        }
        let flag = true;
        for(let j=1;j<word.length;j++){
            if(!row[word[j]]){
                flag = false;
                break;
            }
        }
        flag && result.push(words[i]);

    }

    return result;
}
