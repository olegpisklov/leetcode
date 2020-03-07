class Paren {
    constructor(value, openCount, closeCount) {
      this.value = value;
      this.openCount = openCount;
      this.closeCount= closeCount;
    }
  }
  
  const generate_valid_parentheses = function(num) {
    const init = new Paren('', 0, 0);
    let result = [init];
    
    for (let i = 0; i < num * 2; ++i) {
      const newRes = []; // queue can be used
  
      for (let k = 0; k < result.length; ++k) {
        const paren = result[k];
  
        if (paren.openCount > paren.closeCount) {
          newRes.push(new Paren(paren.value + ')', paren.openCount, paren.closeCount + 1));
        }
  
        if (paren.openCount < num) {
          newRes.push(new Paren(paren.value + '(', paren.openCount + 1, paren.closeCount));
        }
      }
  
      result = newRes;
    }
  
    return result;
  };
  
  // Time and Space: O(N * 2^N)
  
  console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2).map(res => res.value).join(', ')}`)
  console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3).map(res => res.value).join(', ')}`)
  