/**
 * @param cpdomains: a list cpdomains of count-paired domains
 * @return: a list of count-paired domains
 */
const subdomainVisits = function (cpdomains) {
    const result = [];
    const map = {};
    for (let i = 0; i < cpdomains.length; i++) {
        const part = cpdomains[i].split(' ');
        const domains = part[1].split('.');
        const count = +part[0];
        const domainList = [];
        for (let j = domains.length - 1; j > -1; j--) {
            domainList.unshift(domains[j]);
            const domainStr = domainList.join('.');
            map[domainStr] = (map[domainStr] || 0) + count;
        }
    }
    const domains = Object.keys(map);
    for (let i = 0; i < domains.length; i++) {
        result.push(`${map[domains[i]]} ${domains[i]}`);
    }
    return result;
};
