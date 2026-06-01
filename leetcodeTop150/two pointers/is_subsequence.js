/**
 *
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s === "") return true;
    
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) {
            // Here I made a mistake, I increasedd j before the if
            if (j === s.length - 1) return true;
            j++;
        }
    }
    // Best Idea is if i get to the end to the for loop that means s is not subsequence.
    // therefore the if at line 14 is needed (don't do the other way around (return true
    // at the end of the for loop and understand inside the false clause) if you use
    // t in the loop (sounds obvious writing it, you would need to iterate over s, not t)
    return false;
};

console.log(isSubsequence("acb","ahbgdc"));
