/**
 * @param asteroids: a list of integers
 * @return: return a list of integers
 */
const asteroidCollision = function (asteroids) {
    const stack = [];
    let index = 0;
    while(index<asteroids.length){
        if(stack.length && stack[stack.length-1]>0 && asteroids[index]<0){
            const node = stack.pop();
            const sum = node+asteroids[index];
            if(sum>0){
                stack.push(node);
                index++;
            }else if(sum === 0){
                index++;
            }

        }else{
            stack.push(asteroids[index++]);
        }
    }
    return stack;
}

