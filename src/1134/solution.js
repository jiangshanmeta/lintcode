export class Solution {
    /**
     * @param paths: a list of string
     * @return: all the groups of duplicate files in the file system in terms of their paths
     *          we will sort your return value in output
     */
    findDuplicate (paths) {
        const map = {};
        for (const str of paths) {
            const [dir, ...files] = str.split(' ');
            for (const file of files) {
                const start = file.indexOf('(');
                const fileName = file.slice(0, start);
                const content = file.slice(start + 1, file.length - 1);
                if (!map[content]) {
                    map[content] = [];
                }
                map[content].push(`${dir}/${fileName}`);
            }
        }
        return Object.values(map).filter(item => item.length > 1);
    }
}
