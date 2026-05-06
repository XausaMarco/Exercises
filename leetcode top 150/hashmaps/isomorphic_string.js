/**
 *
 * https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic1 = function (s, t) {
    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (
            (sMap[s[i]] && sMap[s[i]] !== t[i] && tMap[t[i]] !== s[i]) ||
            (tMap[t[i]] && tMap[t[i]] !== s[i] && sMap[s[i]] !== t[i])
        )
            return false;
        else {
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        }
    }
    return true;
};
// This solution sucks because you got to use that big ass if condition.
// By storing indexes on the mappings instead of character of the other string, the probem gets much easier



var isIsomorphic = function (s, t) {
    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (tMap[t[i]] !== sMap[s[i]]) return false;
        else {
            sMap[s[i]] = i;
            tMap[t[i]] = i;
        }
    }
    return true;
};
// This is the most eficient version, beating 89%. It's O(n) where n = t.length = s.length

console.log("foo", "bar");
