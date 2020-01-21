/**
 * @param S: a string
 * @return: return a list of strings
 */
const letterCasePermutation = function (S) {
    const result = [];
    backTracking(S,0,[],result);
    return result;
}

function backTracking(S,index,list,result){
    if(index === S.length){
        result.push(list.join(''));
        return;
    }
    const code = S.charCodeAt(index);
    if( (code>64 && code<91) || (code>96 && code<123)){
        list.push(S[index].toUpperCase());
        backTracking(S,index+1,list,result);
        list.pop();

        list.push(S[index].toLowerCase());
        backTracking(S,index+1,list,result);
        list.pop();
    }else{
        list.push(S[index]);
        backTracking(S,index+1,list,result);
        list.pop();
    }
}