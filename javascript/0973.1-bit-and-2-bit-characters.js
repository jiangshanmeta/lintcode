/**
 * @param bits: a array represented by several bits. 
 * @return: whether the last character must be a one-bit character or not
 */
const isOneBitCharacter = function (bits) {
    let lastIs1Bit = false;
    let index = 0;
    while(index<bits.length){
        if(bits[index] === 0){
            lastIs1Bit = true;
            index++;
        }else{
            lastIs1Bit = false;
            index += 2;
        }
    }
    return lastIs1Bit;
}