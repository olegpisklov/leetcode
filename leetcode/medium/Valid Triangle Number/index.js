/**
 * @param {number[]} nums
 * @return {number}
 */
// [2,2,3,4]

var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    
    let counter = 0;
    
    for (let i = 0; i < nums.length - 2; ++i) {
        if (nums[i] === 0) continue;
        
        let k = i + 2;

        for (let j = i + 1; j < nums.length - 1; ++j) {
            while(k < nums.length && nums[i] + nums[j] > nums[k]) {
                ++k;
            }
            counter += k - j - 1;
        }
    }
    
    return counter;
}

var triangleNumberBrut = function(nums) {
    let counter = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                if (nums[i] + nums[j] > nums[k] && 
                    nums[i] + nums[k] > nums[j] && 
                    nums[j] + nums[k] > nums[i]) {
                    ++counter;       
                }
            }    
        }    
    }
    
    return counter;
}

var triangleNumberSubset = function(nums) {
    const res = {sum: 0};
    
    for (let i = 0; i < nums.length; ++i) {
        const path = [];
        
        path.push(nums[i]);
        
        helper(nums, i, path, res);
    }
    
    return res.sum;
};

const helper = (nums, index, path, res) => {
    if (index === nums.length) return;

    if (path.length === 3) {
        if (isTriangle(path)) {
            res.sum += 1;
        }
        return;
    }
    
    for (let i = index + 1; i < nums.length; ++i) {
        path.push(nums[i]);
        helper(nums, i, path, res);
        path.pop();
    }
}
    
const isTriangle = (arr) => {
    return arr[0] + arr[1] > arr[2] && 
        arr[0] + arr[2] > arr[1] && 
        arr[1] + arr[2] > arr[0];
}