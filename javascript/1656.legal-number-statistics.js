/**
 * @param a: the array a
 * @param L: the integer L
 * @param R: the integer R
 * @return: Return the number of legal integers
 */
const getNum = function (a, L, R) {
    let count = 0;
    for(let i=0;i<a.length;i++){
        a[i]>=L && a[i]<=R && count++;
    }
    return count;
}
