/**
 * @param prices: Given an integer array
 * @return: Maximum profit
 */
const maxProfit = function (prices) {
    if(prices.length === 0){
        return 0;
    }
    
    let result = 0;
    let min = prices[0];
    let max = prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i]>=max){
            max = prices[i];
        }else{
            result += max-min;
            min = prices[i];
            max = prices[i];
        }
    }
    return result+max-min;
}
