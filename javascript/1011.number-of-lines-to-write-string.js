/**
 * @param widths: an array
 * @param S: a string
 * @return: how many lines have at least one character from S, and what is the width used by the last such line
 */
const numberOfLines = function (widths, S) {
    let rowCount = 0;
    let lastRow = 0;
    for(let i=0;i<S.length;i++){
        const width = widths[S.charCodeAt(i)-97];
        if(lastRow+width>100){
            rowCount++;
            lastRow = width;
        }else{
            lastRow += width;
        }
    }
    return [rowCount+(lastRow?1:0),lastRow];
}