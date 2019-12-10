/**
 * @param a: a integer represent the length of one edge
 * @param b: a integer represent the length of one edge
 * @param c: a integer represent the length of one edge
 * @return: whether three edges can form a triangle
 */
const isValidTriangle = function (a, b, c) {
    return a+b>c && a+c>b && b+c>a;
}
