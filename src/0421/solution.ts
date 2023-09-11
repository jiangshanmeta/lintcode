export class Solution {
    /**
     * @param path: the original path
     * @return: the simplified path
     */
    simplifyPath (path: string): string {
        const pathArr = path.split('/');
        const stack:string[] = [];
        for (const str of pathArr) {
            if (str === '') {
                continue;
            }
            if (str === '.') {
                continue;
            }
            if (str === '..') {
                stack.pop();
            } else {
                stack.push(str);
            }
        }
        return `/${stack.join('/')}`;
    }
}
