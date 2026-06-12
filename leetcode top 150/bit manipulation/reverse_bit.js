/**
 * https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number} n
 * @return {number}
 */

var reverseBits = function (n) {
    let ret = 0;
    let i = 0;
    while (n > 0) {
        let mul = n % 2 == 0 ? 1 : 0;
        ret += Math.pow(2, i) * mul;
        n = Math.trunc(n / 2);
        i++;
    }
    return ret;
};

// idea:
// if the number has 32 bits, pow = 32. through an AND operation and the power take the i-th bit
// and its related number (ex. 00100, 4, 5 bit) and sum it to the total
var reverseBits1 = function (n) {
    let pow = 31;
    let ret = 0;
    while (pow >= 0) {
        // let bit = Math.pow(2,pow) & n; // get the pow-th bit DO NOT USE Math.pow, it returns a float
        let bit = (1 << pow) & n; //create the mask and apply it to
        let num = bit >> pow; // shift the bit all the way to the right
        ret += num << (31 - pow); // shift num to the reversed position and sum it to ret
        pow--; // decrease pow
    }
    return ret;
};
// O(32)

var reverseBits2 = function (n) {
    const rev = (v, len) => {
        if (len === 1) return v & 1; // return the bit

        const half = len >> 1; // take the half
        const mask = (1 << half) - 1; // mask = all ones up to the half

        const lo = v & mask; // take the lower half of v using the mask always in 32 bit
        const hi = v >>> half; // take the upper part using the "shift to right ans fill with 0" operation

        return (rev(lo, half) << half) | rev(hi, half); // run recursively, swapping lo and hi
    };

    return rev(n, 32) >>> 0; // return the number as an unsigned 32 bit integer
};
// Divide and conquer:
// Optimal solutions using masks and inverting the two halves of the number recursively
// Just an explanation, couldn't come up with this myself
