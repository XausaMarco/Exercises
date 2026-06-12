/**
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLength = 0;
    let chars = {};

    for (let right = 0; right < s.length; right++) {
        chars[s[right]] = (chars[s[right]] || 0) + 1;

        if (chars[s[right]] > 1) {
            const len = right - left;
            if (len > maxLength) maxLength = len;

            //! doing this, characters are missed. For instance:
            //! in "abcad" this would miss "bcad".
            //! Instead, a while loop should remove frmo the left 
            //! until the repetition is removed.
            left = right;

            chars = {};

            // * very important to create the new map with the last character already in
            // * or if there are multiple sequent repetitions one will be lost
            chars[s[right]] = 1;
        }
    }
    return maxLength;
};

var lengthOfLongestSubstring1 = function (s) {
    let left = 0;
    let maxLength = 0;
    let chars = {};

    for (let right = 0; right < s.length; right++) {
        chars[s[right]] = (chars[s[right]] || 0) + 1;

        if (chars[s[right]] > 1) {
            while(chars[s[right]] > 1){
                chars[s[left]]--;
                left++;
            }
        }
        maxLength = Math.max(maxLength, right - left +1)
    }
    return maxLength;
};

// An analog solution could use a Set instead of a Map.

console.log(lengthOfLongestSubstring("aab"));
