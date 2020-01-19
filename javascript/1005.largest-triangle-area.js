/**
 * @param points: List[List[int]]
 * @return: return a double
 */
const largestTriangleArea = function (points) {
    let result = 0;
    for(let i=0;i<points.length-2;i++){
        const [x1,y1] = points[i];
        for(let j=i+1;j<points.length-1;j++){
            const [x2,y2] = points[j];
            for(let k=j+1;k<points.length;k++){
                const [x3,y3] = points[k];
                result = Math.max(result,Math.abs((x2-x1)*(y3-y1)-(x3-x1)*(y2-y1))/2)
            }
        }
    }
    return result;
}

