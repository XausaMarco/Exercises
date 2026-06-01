/**
 *
 * https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    const valid = new Set([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
    ]);

    while (i < j) {
        while (!valid.has(s[i]) && i < j) i++;
        while (!valid.has(s[j]) && i < j) j--;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
};
/**
 * This is O(n) in time and O(1) in space. Only thing to pay attention is the two 
 * inner while loops conditions, they need also i < j.
 * Another way to check if a letter is valid instead of the set is char.charCodeAt, and 
 * check if it is between the charCodeAt of "a" and "z", "A" and "Z", "0", "9"
 */

console.log(isPalindrome(",,,,,,,,,,,,acva"));
