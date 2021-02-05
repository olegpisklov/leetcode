/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    let total = 0;
    let target = 0;
    let moments = 0;
    
    for (let i = 0; i < light.length; ++i) {
        total += light[i];
        target += i + 1;
        
        if (total === target) ++moments;
    }
    
    return moments;
}

var numTimesAllBlueMy = function(light) {
    let yellowCount = 0;
    const lightsOn = new Array(light.length + 1).fill(0);
    
    lightsOn[0] = 2; // 2 - blue, 1 - yellow, 0 - off
    
    let moments = 0;
    
    for (let i = 0; i < light.length; ++i) {
        const n = light[i];
        
        if (lightsOn[n - 1] === 0 || lightsOn[n - 1] === 1) {
            lightsOn[n] = 1;
            ++yellowCount;
        } else {
            lightsOn[n] = 2;
            
            let j = n + 1;
            
            while (lightsOn[j] === 1) {
                lightsOn[j] = 2;
                --yellowCount;
                ++j;
            }
        }
        
        if (yellowCount === 0) {
            ++moments;
        }
    }
    
    return moments;
};