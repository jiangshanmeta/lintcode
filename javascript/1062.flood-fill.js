/**
 * @param image: a 2-D array
 * @param sr: an integer
 * @param sc: an integer
 * @param newColor: an integer
 * @return: the modified image
 */
const floodFill = function (image, sr, sc, newColor) {
    if(image[sr][sc] === newColor){
        return image;
    }
    dfs(image,sr,sc,newColor)
    return image;
}

function dfs(image,sr,sc,newColor){
    const oldColor = image[sr][sc];
    image[sr][sc] = newColor;
    sr>0 && image[sr-1][sc] === oldColor && floodFill(image,sr-1,sc,newColor);
    sc>0 && image[sr][sc-1] === oldColor  && floodFill(image,sr,sc-1,newColor);
    sr<image.length-1 && image[sr+1][sc] === oldColor && floodFill(image,sr+1,sc,newColor);
    sc<image[0].length-1 && image[sr][sc+1] === oldColor && floodFill(image,sr,sc+1,newColor);
}