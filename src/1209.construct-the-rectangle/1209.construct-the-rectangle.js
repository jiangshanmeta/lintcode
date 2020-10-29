/**
 * @param area: web pageâ€™s area
 * @return: the length L and the width W of the web page you designed in sequence
 */
const constructRectangle = function (area) {
    let w = Math.floor(Math.sqrt(area));
    while (true) {
        if (area % w === 0) {
            return [area / w, w, ];
        }
        w -= 1;
    }
};
