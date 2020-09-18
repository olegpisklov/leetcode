/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const closed = {
      ']': '[',
      ')': '(',
      '}': '{'
  }
  const openedStack = [];
      
  for (let i = 0; i < s.length; ++i) {
      const brace = s[i];
      
      if (closed[brace] === undefined) {
          openedStack.push(brace);
      } else {
          if (!openedStack.length) {
              return false;
          }
          const lastOpened = openedStack.pop();
          
          if (lastOpened !== closed[brace]) {
              return false;
          }
      }        
  }
  
  return openedStack.length === 0;
};