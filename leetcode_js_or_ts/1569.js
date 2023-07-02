// https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
function numOfWays(nums) {
    return (helper(nums) - 1n) % BigInt(1e9 + 7);
}

function helper(nums) {
    if (nums.length < 3) return 1n;

    const left = [];
    const right = [];

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < nums[0]) left.push(nums[i]);
        if (nums[i] > nums[0]) right.push(nums[i]);
    }

    const combinations = mChooseN(nums.length - 1, left.length);
    return combinations * helper(left) * helper(right);
}

function mChooseN(m, n) {
    let mBig = BigInt(m);
    let nBig = BigInt(n);
    return factorial(mBig) / factorial(mBig - nBig) / factorial(nBig);
}

const factCache = new Map();

function factorial(num) {
    if (num <= 1) {
        return 1n;
    }
    if (factCache.has(num)) {
        return factCache.get(num);
    }
    const result = BigInt(num) * factorial(num - 1n);
    factCache.set(num, result);
    return result;
}
