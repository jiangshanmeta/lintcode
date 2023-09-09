export class Solution {
    /**
     * @param s: personal information string S
     * @return: the correct "mask"
     */
    maskingPersonalInformation (s: string): string {
        if (s.includes('@')) {
            const [a, b, ] = s.toLowerCase().split('@');
            return `${a[0]}*****${a[a.length - 1]}@${b}`;
        } else {
            s = s.replace(/\D/g, '');
            let result = '';
            if (s.length > 10) {
                result = `+${'*'.repeat(s.length - 10)}-`;
            }
            result += '***-***-' + s.slice(s.length - 4);
            return result;
        }
    }
}
