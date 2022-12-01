/*


Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true


*/


// my solution

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    } else {
        return s.split('').sort( (a,b) => a.localeCompare(b)).join('')
        == t.split('').sort( (a,b) => a.localeCompare(b)).join('')
    }
};

// more efficient solutions

// methods

var isAnagram = function(s, t) {
    const normalizedS = s.toLowerCase().split("").sort().join();
    const normalizedT = t.toLowerCase().split("").sort().join();
    return normalizedS === normalizedT 
};

// hash map

var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    const temp = {};
    for (let i = 0; i < s.length; i++) {
        temp[s[i]] = (temp[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!temp[t[i]]) return false;
        temp[t[i]]--;
    }
    for (let item in temp) {
        if (temp[item] != 0) return false;
    }
    return true;
};
