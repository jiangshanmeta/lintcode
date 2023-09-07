export class Solution {
    /**
     * @param sourceString: a string
     * @param targetStrings: a string array
     * @return: Returns a bool array indicating whether each string in targetStrings is a substring of the sourceString
     */
    whetherStringsAreSubstrings (sourceString: string, targetStrings: string[]): boolean[] {
        return targetStrings.map(str => sourceString.includes(str));
    }
}
