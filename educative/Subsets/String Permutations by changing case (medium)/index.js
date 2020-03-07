const find_letter_case_string_permutations = function(str) {
    let permutations = [''];
  
    for (let i = 0; i < str.length; ++i) {
      const char = str[i];
      const flipped = flipChar(char);
      const result = [];
      
      for (let k = 0; k < permutations.length; ++k) {
        result.push(permutations[k] + char);
  
        if (char !== flipped) { // not a number
          result.push(permutations[k] + flipped);
        }
      }
  
      permutations = result;
    }
  
    return permutations;
  };
  
  const flipChar = (char) => {
    const lower = char.toLowerCase(); 
  
    if (char !== lower) {
      return lower;
    }
  
    return char.toUpperCase();
  };
  
  console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
  console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
  