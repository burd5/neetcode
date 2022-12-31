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


var isAnagram = (s,t) => {
    if(s.length !== t.length){
        return false;
    }
    let characters = {};

    for(let i = 0; i < s.length; i++){
        characters[t[i]] = (characters[t[i]] || 0) + 1;
    }

    for(let i = 0; i < t.length; t++){
        if(!characters[t[i]]) return false;
        characters[t[i]]--
    }

    for(let letters in characters){
        if(letters[characters] != 0) return false;
    }

    return true;


}


const isAnagram = function(s,t){
    let newS = s.toLowerCase().split('').sort().join('')
    let newT = t.toLowerCase().split('').sort().join('')

    return newS === newT
}

const isAnagram = function(s,t){
    if(s.length !== t.length) return false;

    let counts = {};

    for(let i = 0; i < s.length; i++){
        if(counts[s[i]]){
            counts[s[i]]++
        } else {
            counts[s[i]] = 1
        }
    }

    for(let i = 0; i < t.length; i++){
        if(!counts[t[i]]) return false;
        counts[t[i]]--
    }

    for(let item in counts){
        if(item !== 0) return false;
    }

    return true;
}