/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const partInd = partition(nums, left, right);
        
        if (partInd === nums.length - k) {
            return nums[partInd];
        } else if (partInd < nums.length - k) {
            left = partInd + 1;
        } else {
            right = partInd - 1;
        }
    }
}

const partition = (nums, start, end) => {
    const pivot = nums[start];
    let j = end;
    
    for (let i = end; i > start; --i) {
        if (nums[i] > pivot) {
            swap(nums, i, j);
            --j;
        }
    }
    
    swap(nums, start, j);
    
    return j;
}

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// sorted: [1,2,3,4,5,6]

// [1,2,3,4,5,6]  k=2

// target index - len - k = 4


