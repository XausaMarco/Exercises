/**
 *
 * https://leetcode.com/problems/sqrtx/
 *
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
    let squareRoot = Math.floor(x / 2);
    while (Math.floor(x / squareRoot) != squareRoot) {
        squareRoot++;
        if (squareRoot * squareRoot > x) return squareRoot - 1;
    }

    return squareRoot;
};
//Must find something faster, this is way too slow
//maybe reducing input space (instead of checking all numbers)

var mySqrt1 = (x) => {
    if (x < 2) return x;
    let sqrt = Math.floor(x / 2);

    let binarySearch = false;
    let upperBound;
    let lowerBound;
    while (Math.floor(x / sqrt) != sqrt) {
        //activat binary search and sett upper and lower bounds
        if (sqrt * sqrt < x) {
            lowerBound = sqrt;
            upperBound = lowerBound * 2;
            binarySearch = true;
        }
        sqrt = Math.floor(sqrt / 2);
    }
    if (binarySearch) {
        let half = Math.floor((upperBound + lowerBound) / 2);
        if (half * half < x) {
            if ((half + 1) * (half + 1) > x) return half;
            else lowerBound = half;
        } else if (half * half > x)
            if ((half - 11) * (half - 1) < x) return half - 1;
            else upperBound = half;
        else return half;
    }
    return sqrt;
};
// This algorithm is overcomplicated

var mySqrt2 = (x) => {
    if (x < 2) return x;
    let right = Math.trunc(x / 2);
    let left = 0;
    if (right * right === x) return right; // special case 4
    if (right === 1) return 1; // special case 2 and 3
    if (x === 5) return 2; // special case 5

    // binary search between 0 and x/2
    while (true) {
        let half = Math.floor((right + left) / 2);
        if (half * half <= x && (half + 1) * (half + 1) > x) return half;

        if (half * half < x) left = half;
        if (half * half > x) right = half;
    }
};
// this actually works quite good, O(logn), but requires to manage
// dfferent special cases between 1 and 5 explicitly

var mySqrt3 = (x) => {
    if (x < 2) return x;
    let left = 1;
    let right = Math.floor(x / 2);
    let sqrt;

    while (left < right) {
        sqrt = Math.trunc((left + right) / 2);
        const square = sqrt * sqrt;

        if (square === x) return square;
        else if (square < x) left = sqrt + 1;
        else right = sqrt - 1;
    }

    return sqrt;
};
// This is my attempt to implement the binary search and it sucks, i didn't
// set up the looping correctly

var mySqrt4 = (x) => {
    if (x < 2) return x;
    let left = 1;
    let right = Math.floor(x / 2);
    let sqrt;

    while (left <= right) {
        sqrt = Math.trunc((left + right) / 2);
        const square = sqrt * sqrt;

        if (square === x) return sqrt;
        else if (square < x) left = sqrt + 1;
        else right = sqrt - 1;
    }

    return right;
};
// This is the correct version with the proper binary search

console.log(mySqrt2(6));
