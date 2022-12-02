/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

// my solution

var groupAnagrams = function(strs) {
    let arrays={};
    for(let i = 0; i < strs.length; i++){
        let current = strs[i];
        let sorted = strs[i].split('').sort().join('')
        if(arrays[sorted]){
            arrays[sorted].push(current)
        } else{
            arrays[sorted] = [current];
        }
    }
    return Object.values(arrays);
};

// other solutions



