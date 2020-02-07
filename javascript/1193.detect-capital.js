/**
 * @param word: a string
 * @return: return a boolean
 */
const detectCapitalUse = function (word) {
    if(word.length<2){
        return true;
    }

    const firstCode = word.charCodeAt(0);
    if(firstCode<91){
        if(word.charCodeAt(1)<91){
            for(let i=1;i<word.length;i++){
                if(word.charCodeAt(i)>90){
                    return false;
                }
            }
        }else{
            for(let i=1;i<word.length;i++){
                if(word.charCodeAt(i)<91){
                    return false;
                }
            }
        }

    }else{
        for(let i=1;i<word.length;i++){
            if(word.charCodeAt(i)<91){
                return false;
            }
        }
    }
    return true;
}
