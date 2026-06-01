/**
 * Base Two-Pointer Pattern
 * Use case: Finding a pair in a sorted array (e.g., Two Sum II)
 */
function twoPointers(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === targhet) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return null;
}
