const search_ceiling_of_a_number = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let middleIndex;
  
    if (arr[end] < key) {
      return -1;
    }
  
    if (arr[start] > key) {
      return start;
    }
  
    while (start <= end) {
      middleIndex = Math.ceil((start + end) / 2);
  
      if (arr[middleIndex] === key) {
        return middleIndex;
      }
  
      if (arr[middleIndex] < key) {
        start = middleIndex + 1;
      } else {
        end = middleIndex - 1;
      }
    }
  
    return middleIndex + 1;
  };
  
  
  console.log(search_ceiling_of_a_number([4, 6, 10], 6))
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
  console.log(search_ceiling_of_a_number([4, 6, 10], 17))
  console.log(search_ceiling_of_a_number([4, 6, 10], -1))
  