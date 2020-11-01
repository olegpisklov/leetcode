/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const max = getMaxIndex(height);
    
    let sum = 0;
    let peak = 0; // track current peak
    
    // go from left to the max index
    for (let i = 0; i < max; ++i) {
        if (height[i] < peak) {
            sum += peak - height[i];
        } else {
            peak = height[i];
        }
    }
    
    peak = 0;

    // go from right to the max index
    for (let i = height.length - 1; i > max; --i) {
        if (height[i] < peak) {
            sum += peak - height[i];
        } else {
            peak = height[i];
        }
    }
    
    return sum;
}

const getMaxIndex = (nums) => {
    let max = nums[0];
    let ind = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (max <= nums[i]) {
            max = nums[i];
            ind = i;
        }
    }
    
    return ind;
}



var trapBrut = function(height) {
    let res = 0;
    
    for (let i = 1; i < height.length - 1; ++i) {
        let maxLeft = 0;
        let maxRight = 0;
        
        for (let j = i + 1; j < height.length; ++j) {
            maxRight = Math.max(maxRight, height[j]);
        }  
        
        for (let j = i - 1; j >= 0; --j) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        
        const cur = Math.min(maxRight, maxLeft) - height[i];
        
        if (cur > 0) {
            res += cur;
        }
    }
    
    return res;
};

var trapDynamic = function(height) {
    let res = 0;
    let maxLeft = new Array(height.length);
    let maxRight = new Array(height.length);
    
    maxLeft.fill(0);
    maxRight.fill(0)
    
    maxLeft[0] = height[0];
    
    for (let i = 1; i < height.length; ++i) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }
    
    maxRight[height.length - 1] = height[height.length - 1];
    
    for (let i = height.length - 2; i >= 0; --i) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }

    for (let i = 1; i < height.length - 1; ++i) {
        const cur = Math.min(maxRight[i], maxLeft[i]) - height[i];
        
        if (cur > 0) {
            res += cur;
        }
    }
    
    return res;
};

var trap = function(height) {
    let res = 0;
    let maxLeft = 0;
    let maxRight = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] > maxLeft) {
                maxLeft = height[left];
            } else {
                res += maxLeft - height[left];
            }
            
            ++left;
        } else {
            if (height[right] > maxRight) {
                maxRight = height[right];
            } else {
                res += maxRight - height[right];
            }
            
            --right;
        } 
    }
    
    return res;
};