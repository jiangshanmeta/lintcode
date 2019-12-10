/**
 * @param h: hours
 * @param m: minutes
 * @return: angle between hour hand and minute hand at X:Y in a clock
 */
const timeAngle = function (h, m) {
    if(h>11){
        h -= 12;
    }
    const mDeg = m*6;
    const hDeg = h*30+30*m/60;
    const deg = Math.abs(hDeg-mDeg);
    return deg>180?360-deg:deg;
}

