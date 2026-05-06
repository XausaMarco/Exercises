/**
 *
 * https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = {};

    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]]) map[magazine[i]]++;
        else map[magazine[i]] = 1;
    }
    let i = 0;
    while (i < ransomNote.length) {
        if (!map[ransomNote[i]] || map[ransomNote[i]] === 0) return false;
        else map[ransomNote[i]]--;
        i++;
    }
    return true;

};
//the algorithm is on its optimal status O(m+n)

console.log(canConstruct("aa","aab"));
