/**
 * @param names: the name
 * @param grades: the grade
 * @return: the maximum average score
 */
const maximumAverageScore = function (names, grades) {
    const map = {};
    for(let i=0;i<names.length;i++){
        if(!map[names[i]]){
            map[names[i]] = [grades[i],1];
        }else{
            map[names[i]][0] += grades[i];
            map[names[i]][1] += 1;
        }
    }
    let max = 0;
    const nameList = Object.keys(map);
    for(let i=0;i<nameList.length;i++){
        max = Math.max(max,map[nameList[i]][0]/map[nameList[i]][1]  );
    }
    return max;
}

