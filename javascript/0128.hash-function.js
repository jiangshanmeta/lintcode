/**
 * @param key: A string you should hash
 * @param HASH_SIZE: An integer
 * @return: An integer
 */
const hashCode = function (key, HASH_SIZE) {
    let sum = 0;
    for(let i=0;i<key.length;i++){
        sum = (sum*33+key.charCodeAt(i))%HASH_SIZE;
    }
    return sum%HASH_SIZE
}

