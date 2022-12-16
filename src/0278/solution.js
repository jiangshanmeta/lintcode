/**
 * @param screen: a two-dimensional array of colors
 * @param x: the abscissa of the specified point
 * @param y: the ordinate of the specified point
 * @param newColor: the specified color
 * @return: Can it be filled
 */
const paintFill = function (screen, x, y, newColor) {
    if (screen[x][y] === newColor) {
        return false;
    }
    dfs(screen, x, y, newColor);
    return true;
};

function dfs (screen, x, y, newColor) {
    const old = screen[x][y];
    screen[x][y] = newColor;

    x > 0 && screen[x - 1][y] === old && dfs(screen, x - 1, y, newColor);
    y > 0 && screen[x][y - 1] === old && dfs(screen, x, y - 1, newColor);
    x < screen.length - 1 && screen[x + 1][y] === old && dfs(screen, x + 1, y, newColor);
    y < screen[0].length - 1 && screen[x][y + 1] === old && dfs(screen, x, y + 1, newColor);
}
