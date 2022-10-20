export class Solution {
    /**
     * @param letters: A string
     * @return: A string
     */
    lowercaseToUppercase2 (letters: string): string {
        const result:string[] = [];
        for (let i = 0; i < letters.length; i++) {
            const code = letters.charCodeAt(i);
            if (code > 96 && code < 123) {
                result.push(letters[i].toUpperCase());
            } else {
                result.push(letters[i]);
            }
        }

        return result.join('');
    }
}
