export class Solution {
    /**
     * @param s: The c++ file
     * @return: return if there is "Google" in commet line
     */
    findGoogle (s: string[]): boolean {
        let inBlockComment = false;
        for (let i = 0; i < s.length; i++) {
            if (inBlockComment) {
                const endIndex = s[i].indexOf('*/');
                if (endIndex === -1) {
                    if (s[i].includes('Google')) {
                        return true;
                    }
                } else {
                    const googleIndex = s[i].indexOf('Google');
                    if (googleIndex > -1 && googleIndex < endIndex) {
                        return true;
                    }
                    inBlockComment = false;
                }
            } else {
                const inlineCommentIndex = s[i].indexOf('//');
                if (inlineCommentIndex !== -1 && s[i].includes('Google', inlineCommentIndex)) {
                    return true;
                }
                const start = s[i].indexOf('/*');
                if (start > -1) {
                    if (inlineCommentIndex > -1) {
                        if (start < inlineCommentIndex) {
                            inBlockComment = true;
                            i--;
                        }
                    } else {
                        inBlockComment = true;
                        i--;
                    }
                }
            }
        }
        return false;
    }
}
