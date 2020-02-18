const hammingWeight = function (n) {
    let count = 0;
    while(n){
        count++;
        n = n&(n-1);
    }
    return count;
}