function isIPV4 (IP:string) {
    const segment = IP.split('.');
    if (segment.length !== 4) {
        return false;
    }
    for (let i = 0; i < segment.length; i++) {
        if (segment[i][0] === '0' && segment[i].length > 1) {
            return false;
        }
        const num = +segment[i];
        if (num >= 0 && num < 256) {
            continue;
        }
        return false;
    }
    return true;
}
const legalChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', ];
function isIPV6 (IP:string) {
    const segments = IP.split(':');
    if (segments.length !== 8) {
        return false;
    }
    return segments.every((item) => {
        if (item.length > 4 || item.length === 0) {
            return false;
        }

        for (let i = 0; i < item.length; i++) {
            if (!legalChars.includes(item[i])) {
                return false;
            }
        }
        return true;
    });
}

export class Solution {
    /**
     * @param iP: the given IP
     * @return: whether an input string is a valid IPv4 address or IPv6 address or neither
     */
    validIPAddress (iP: string): string {
        if (iP.includes('.')) {
            return isIPV4(iP) ? 'IPv4' : 'Neither';
        } else {
            return isIPV6(iP.toLowerCase()) ? 'IPv6' : 'Neither';
        }
    }
}
