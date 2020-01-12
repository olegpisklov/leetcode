const find_happy_number = function(num) {
    let slow = num;
    let fast = num;
  
    while (true) {
      slow = findDigintsSquareSum(slow);
      fast = findDigintsSquareSum(findDigintsSquareSum(fast));
  
      if (slow === fast) {
        break;
      }
    }
  
    return slow === 1; 
  };
  
  const findDigintsSquareSum = (num) => {
    let sum = 0;
  
    while (num > 0) {
      const digit = num % 10;
  
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
  
    return sum;
  }
  console.log(`${find_happy_number(23)}`)
  console.log(`${find_happy_number(12)}`)