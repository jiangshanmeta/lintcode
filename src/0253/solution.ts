export class Solution {
    /**
     * @param baseUrl: the string of base_url
     * @param queryParamsList: sequence of two-element tuples by query_params
     * @return: return a url query string
     */
    urlencode (baseUrl: string, queryParamsList: string[][]): string {
        if (queryParamsList.length === 0) {
            return baseUrl;
        }
        queryParamsList.sort((a, b) => a[0] < b[0] ? -1 : 1);
        return baseUrl + '?' + queryParamsList.map(item => `${item[0]}=${item[1]}`).join('&');
    }
}
