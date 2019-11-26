/**
 * @param num: a string
 * @return: true if a number is strobogrammatic or false
 */
const isStrobogrammatic = function (num) {
    let left = 0;
    let right = num.length-1;
    const badNumber = {
        '2':true,
        '3':true,
        '4':true,
        '5':true,
        '7':true,
    }
    const map = {
        '0':'0',
        '1':'1',
        '6':'9',
        '8':'8',
        '9':'6',
    }

    while(left<=right){
        if(badNumber[num[left]] || badNumber[num[right]] || map[num[left]] !== num[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

