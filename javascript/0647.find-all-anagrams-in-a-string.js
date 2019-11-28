/**
 * @param s: a string
 * @param p: a string
 * @return: a list of index
 */
const findAnagrams = function (s, p) {
    const countsS = new Array(26).fill(0);
    const countsP = new Array(26).fill(0);
    for(let i=0;i<p.length;i++){
        countsP[p.charCodeAt(i)-97]++;
    }
    for(let i=0;i<p.length-1;i++){
        countsS[s.charCodeAt(i)-97]++;
    }

    let result = [];
    for(let i=p.length-1;i<s.length;i++){
        countsS[s.charCodeAt(i)-97]++;
        if(countsS.every((num,index)=>countsP[index] === num  )){
            result.push(i-p.length+1);
        }
        countsS[s.charCodeAt(i-p.length+1)-97]--;
    }
    
    return result;
}

