/**
 * @param s: Roman representation
 * @return: an integer
 */
const romanToInt = function (s) {
    let result = 0;
    let index = 0;
    while(index<s.length){
        if(s[index] === 'M'){
            result += 1000;
            index++;
        }else if(s[index] === 'D'){
            result += 500;
            index++;
        }else if(s[index] === 'C'){
            if(index+1<s.length){
                if(s[index+1] === 'D'){
                    result += 400;
                    index+= 2;
                    continue;
                }else if(s[index+1] === 'M'){
                    result += 900;
                    index += 2;
                    continue;
                }
            }
            let count = 0;
            while(index<s.length && s[index] === 'C'){
                count++;
                index++;
            }
            result += count*100;
        }else if(s[index] === 'L'){
            result += 50;
            index++;
        }else if(s[index] === 'X'){
            if(index+1<s.length){
                if(s[index+1] === 'L'){
                    result += 40;
                    index += 2;
                    continue;
                }else if(s[index+1] === 'C'){
                    result += 90;
                    index += 2;
                    continue;
                }
            }
            let count = 0;
            while(index<s.length && s[index] === 'X'){
                count++;
                index++;
            }
            result += count*10;
        }else if(s[index] === 'V'){
            result += 5;
            index++;
        }else{
            if(index+1<s.length){
                if(s[index+1] === 'V'){
                    result += 4;
                    index += 2;
                    continue;
                }else if(s[index+1] === 'X'){
                    result += 9;
                    index += 2;
                    continue;
                }
            }
            let count = 0;
            while(index<s.length && s[index] === 'I'){
                count++;
                index++;
            }
            result += count;
        }
        
        
    }
    return result;
}