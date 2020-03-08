const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    const isAsc = arr[start] < arr[end];
  
    while (start <= end) {
        if (arr[start] === key) {
            return start;
        }
    
        if (arr[end] === key) {
            return end;
        }
    
        const middleIndex = Math.floor((start + end) / 2);
    
        if (arr[middleIndex] === key) {
            return middleIndex;
        }
    
        if (isAsc && arr[middleIndex] < key || !isAsc && arr[middleIndex] > key) {
            start = middleIndex;
        } else {
            end = middleIndex;
        }
    }
  
    return -1;
};
  
  console.log(binary_search([4, 6, 10], 10))
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  console.log(binary_search([10, 6, 4], 10))
  console.log(binary_search([10, 6, 4], 4))
  