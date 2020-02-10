/**
 * @param S: a string
 * @param K: a integer
 * @return: return a string
 */
const licenseKeyFormatting = function (S, K) {
    const str = S.replace(/-/g,'').toUpperCase();
    const result = [];
    let index = 0;
    const mod = str.length%K;
    if(mod){
        result.push(str.substring(0,mod));
        index = mod;
    }

    while(index<str.length){
        result.push(str.substring(index,index+K));
        index += K;
    }

    return result.join('-');
}
