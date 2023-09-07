export class Solution {
    /**
     * @param message: the string xiao Q sent to xiao A.
     * @return: the string after decompress
     */
    decompressString (message: string): string {
        let index = 0;
        const parse = () => {
            let current = '';

            while (index < message.length) {
                if (message[index] === '[') {
                    const seperatorIndex = message.indexOf('|', index);
                    const count = +message.slice(index + 1, seperatorIndex);
                    index = seperatorIndex + 1;
                    current += parse().repeat(count);
                } else if (message[index] === ']') {
                    index++;
                    return current;
                } else {
                    current += message[index++];
                }
            }
            return current;
        };
        return parse();
    }
}
