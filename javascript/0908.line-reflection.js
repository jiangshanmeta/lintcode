/**
 * @param points: n points on a 2D plane
 * @return: if there is such a line parallel to y-axis that reflect the given points
 */
const isReflected = function (points) {
    if(points.length === 0){
        return true;
    }
    // 假设有 计算x坐标
    let totalX = 0;
    const groupByY = {};
    for(let i=0;i<points.length;i++){
        totalX += points[i][0]
        if(!groupByY[points[i][1]]){
            groupByY[points[i][1]] = [];
        }
        groupByY[points[i][1]].push(points[i][0])
    }
    
    const totalCenter = totalX/points.length;
    const ys = Object.keys(groupByY);
    for(let i=0;i<ys.length;i++){
        const rst = compareHorizontal(groupByY[ys[i]],totalCenter);
        if(!rst){
            return false;
        }
    }
    
    return true;
}
// y相同的应该围绕center对称分布
function compareHorizontal(points,center){
    let sumX = 0;
    for(let i=0;i<points.length;i++){
        sumX += points[i];
    }
    if(sumX/points.length !== center){
        return false;
    }
    points.sort((a,b)=>a-b);
    let left = 0;
    let right = points.length-1;
    while(left<right){
        if((points[left]+points[right])/2 !== center){
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
