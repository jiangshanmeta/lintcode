/**
 * @param bills: the Bill
 * @return: Return true if and only if you can provide every customer with correct change.
 */
const lemonadeChange = function (bills) {
    const counts = [0, 0, 0, ];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            counts[0]++;
        } else if (bills[i] === 10) {
            if (counts[0] === 0) {
                return false;
            }
            counts[0]--;
            counts[1]++;
        } else {
            if (counts[0] > 0 && counts[1] > 0) {
                counts[0]--;
                counts[1]--;
            } else if (counts[0] > 2) {
                counts[0] -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
