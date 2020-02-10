/**
 * @param g: children's greed factor
 * @param s: cookie's size
 * @return: the maximum number
 */
const findContentChildren = function (g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let index1 = 0;
    let index2 = 0;
    let count = 0;
    while(index1<g.length && index2<s.length){
        while(index2<s.length && s[index2]<g[index1]){
            index2++;
        }
        if(index2<s.length){
            count++;
        }
        index1++;
        index2++;
    }
    return count;
}
