/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if(!s.length) return true
    let filteredStr = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    return filteredStr.split('').reverse().join('') == filteredStr

};


// my more efficient solution

var isPalindrome = function(str){
    let filteredStr = str.toLowerCase().match(/[a-z0-9]/g);
    if(filteredStr == '' || filteredStr == null || filteredStr.length == 1) return true
    let left = 0;
    let right = (filteredStr.length) - 1;
    while(left < right){
      if(filteredStr[left] !== filteredStr[right]){
        return false;
      } else{
        left++
        right--
      }
    }
    return true;
  }



  // alternate two pointer solution

  var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    
    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;
    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];
        
        // skip char if non-alphanumeric
        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        } else {
            // compare letters
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};