/**
 * Binary Search Implementation
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * @param {Array} arr - A sorted array of elements
 * @param {*} target - The value we are looking for
 * @returns {number} - The index of the target, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
}
