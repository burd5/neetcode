/* Encode a list of strings to a single string. Then, decode the single string to a list of strings. */

var encode = function(strs) {
    if(!strs.length) return null;
    return strs.join('-encodeStr')
}

var decode = function(s) {
    if(s === null) return [];
    return s.split('-encodeSt');
}


// most efficient solution

/**
 * String - Delimiter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string[]} strs
 * @return {string}
 */
 var encode = (strs) => {
    return strs
        .map((str) => `${str.length}#${str}`)/* Time O(N) | Ignore Auxillary Space O(N) */
        .join('');                           /* Time O(N) | Ignore Auxillary Space O(N) */
}

/**
 * String - Delimiter
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string} str
 * @return {string[]}
 */
var decode = (str, index = 0, decodedWords = []) => {
    while (index < str.length) {/* Time O(N) */
        const { nextIndex, word } = delimitWord(str, index);/* Time O(K) | Ignore Auxillary Space Space (K) */

        decodedWords.push(word);                            /*           | Ignore Auxillary Space O(N * K ) */
        index = nextIndex;
    }

    return decodedWords;
}

const delimitWord = (str, index) => {
    const delimiter = str.indexOf('#', index);                             /* Time O(K) */
    const length = Number(str.slice(index, delimiter));                    /* Time O(K) */
    const [ start, end ] = [ (delimiter + 1), ((delimiter + length) + 1) ];
    const word = str.slice(start, end);                                    /* Time O(K) | Ignore Auxillary Space O(K) */

    return {
      nextIndex: end,
      word
    };
}