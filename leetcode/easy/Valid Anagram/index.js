/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const frequencyMap = {};
     
     if (s.length != t.length) return false;
     
     for (let i = 0; i < s.length; ++i) {
         if (frequencyMap[s[i]]) {
             frequencyMap[s[i]] += 1;
         } else {
             frequencyMap[s[i]] = 1;
         }
     }
     
     const frequencyMapT = {};
     
     for (let i = 0; i < t.length; ++i) {
         if (frequencyMapT[t[i]]) {
             frequencyMapT[t[i]] += 1;
         } else {
             frequencyMapT[t[i]] = 1;
         }
     }
     
     for (let key in frequencyMap) {
         if (frequencyMap[key] !== frequencyMapT[key]) return false;
     }
     
     return true;
 };