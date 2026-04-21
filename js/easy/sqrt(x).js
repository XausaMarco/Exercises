/**
 *
 * https://leetcode.com/problems/sqrtx/
 *
 * @param {number} x
 * @return {number}
 */


var mySqrt = function (x) {

    let squareRoot = Math.floor(x/2);
    while (Math.floor(x / squareRoot) != squareRoot) {
        squareRoot++;
        if (squareRoot * squareRoot > x) return squareRoot - 1
    }

    return squareRoot;
};


//Must find something faster, this is way too slow
//maybe reducing input space (instead of checking all numbers)


console.log(mySqrt(8));