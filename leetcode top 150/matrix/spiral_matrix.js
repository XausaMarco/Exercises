/**
 *
 * https://leetcode.com/problems/spiral-matrix/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];

    let i = 0;
    let j = 0;
    let laps = 0;
    while (result.length < (m + 1) * (n + 1)) {
        result.push(matrix[i][j]);

        // increase i or j
        if (j - laps === 0 && i < m - 1 - laps) {
            i++;
            if (i !== 0 && j !== 0) laps++;
        } else if (i === m - 1 - laps && j < n - 1 - laps) j++;
        else if (j === n - 1 - laps && i > 0 + laps) i--;
        else if (i - laps === 0 && j > 0 + laps) j--;
    }

    return result;
};

var spiralOrder1 = function (matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const result = [];

    let x = 0;
    let y = 0;
    
    let dx = 0;
    let dy = 1;

    while (result.length < columns * rows) {
        result.push(matrix[x][y]);

        // Mark as visited
        matrix[x][y] = ".";

        // If the next value is not in valid range
        if (
            !(x + dx >= 0 && x + dx < rows) ||
            !(y + dy >= 0 && y + dy < columns) ||
            matrix[x + dx][y + dy] === "."
        ) {
            // Apply transformation, rotate 90° clockwise
            const tmp = dx;
            dx = dy;
            dy = -tmp;
        }

        // Compute new coordinates
        x += dx;
        y += dy;
    }
    return result;
};

console.log(
    spiralOrder1([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);
