/**
 * @param p1: the first point
 * @param p2: the second point
 * @param p3: the third point
 * @param p4: the fourth point
 * @return: whether the four points could construct a square
 */
const validSquare = function (p1, p2, p3, p4) {
    const p = [p1,p2,p3,p4];
    const disMap = [];
    const uniqueDis = [];
    for(let i=0;i<4;i++){
        for(let j=i+1;j<4;j++){
            const dis = getDis(p[i],p[j]);
            if(disMap[dis]){
                disMap[dis]++;
            }else{
                uniqueDis.push(dis);
                disMap[dis] = 1;
            }
        }
    }
    if(uniqueDis.length !== 2){
        return false;
    }
    if(disMap[uniqueDis[0]] === 4){
        return uniqueDis[1] === 2*uniqueDis[0];
    }else if(disMap[uniqueDis[1]] === 4){
        return uniqueDis[0] === 2*uniqueDis[1];
    }
    return false;
}

function getDis(p1,p2){
    return Math.pow(p2[0]-p1[0],2)+Math.pow(p2[1]-p1[1],2);
}