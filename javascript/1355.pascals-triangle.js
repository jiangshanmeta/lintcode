/**
 * @param numRows: num of rows
 * @return: generate Pascal's triangle
 */
const generate = function (numRows) {
    if(numRows === 0){
        return [];
    }
    const result = [[1]];
    for(let i=1;i<numRows;i++){
        const newRow = [1];
        const lastRow = result[result.length-1];
        for(let j=0;j<i-1;j++){
            newRow.push(lastRow[j]+lastRow[j+1]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
}
