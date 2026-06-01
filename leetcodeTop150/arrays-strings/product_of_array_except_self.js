/**
 *
 * https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const ret = [];

    for (let i = 0; i < nums.length; i++) {
        let mul;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (!mul) mul = nums[j];
                else mul *= nums[j];
            }
        }
        ret[i] = mul;
    }
};
// This is inefficient O(n²) solution, the problem requires O(n)

/**
 * Optimization: calculate the prefix and postfix arrays
 */
var productExceptSelf1 = function (nums) {
    const prefix = [1, nums[1]];
    const postfix = [1, nums[nums.length - 1]];

    let j = nums.length - 3;
    for (let i = 2; i < nums.length; i++) {
        prefix.push(prefix[i - 2] * nums[i - 1]);
        postfix.unshift(prefix[j + 2], nums[j + 1]);
        j--;
    }

    const ret = [];
    for (let i = 0; i < nums.length; i++) {
        ret.push((prefix[i - 1] || 1) * (postfix[i + 1] || 1));
    }
    return ret;
};
// not good idea, not the best way to implement. Instead of accessing previous indexes
// use a support variable. And do not compute prefix and postfix before, compute prefix
// and in the following for compute postfix and the result directly

var productExceptSelf2 = function (nums) {
    const prefix = [];

    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        // prefix.push(pre); much slower than below would be O(n²)
        prefix[i] = pre;
        pre *= nums[i];
    }

    const ret = [];
    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // ret.unshift(prefix[i] * post); much slower than below
        ret[i] = prefix[i] * post;
        post *= nums[i];
    }
    return ret;
};

var productExceptSelf3 = function (nums) {
    let res = [];
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        // prefix.push(pre); much slower than below
        res[i] = pre;
        pre *= nums[i];
    }

    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // ret.unshift(prefix[i] * post); much slower than below
        res[i] *= post;
        post *= nums[i];
    }
    return ret;
};
// This solution is O(n) in time and O(1) in space
console.log(productExceptSelf1());
