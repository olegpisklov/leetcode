function decrypt(word) {
    let res = '';
    let sum = 1;

    for (let i = 0; i < word.length; ++i) {
        const code = word.charCodeAt(i);
        let newCode = code - sum;

        while (newCode < 'a'.charCodeAt(0)) {
            newCode += 26;       
        }

        res += String.fromCharCode(newCode);
        sum += newCode;
    }
        
    return res;
}
  