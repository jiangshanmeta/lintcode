/**
 * @param version1: the first given number
 * @param version2: the second given number
 * @return: the result of comparing
 */
const compareVersion = function (version1, version2) {
    const l1 = version1.split('.');
    const l2 = version2.split('.');
    for(let i=0;i<Math.min(l1.length,l2.length);i++){
        const diff = +l1[i]-l2[i];
        if(diff>0){
            return 1;
        }else if(diff<0){
            return -1;
        }
    }
    return 0;
}

