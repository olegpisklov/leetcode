function calculate_bitwise_complement(n) {
    let bitCount = 1;
  
    while ((n >> bitCount) !== 0) {
      ++bitCount;
    }
  
    const mask = (1 << bitCount) - 1; // 01111 
    
    return n ^ mask;
  }
  
  console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
  console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);