/**
 * You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10**4
 * -10**9 <= nums[i] <= 10**9
 * -10**9 <= target <= 10**9
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n**2) time complexity?
 */

/**
 * Plan
 * Sort the array in ascending order
 *
 */
function twoSum(nums: number[], target: number): number[] {
    const sortedNums = [...nums]
    sortedNums.sort((a, b) => a - b)

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const counterpart = target - sortedNums[left]

        while (sortedNums[right] >= counterpart) {
            if (sortedNums[right] === counterpart) {
                return [nums.indexOf(sortedNums[left]), nums.lastIndexOf(counterpart)]
            }
            right--
        }
        left++
    }

    return []
}

console.log(twoSum([0, 4, 3, 0], 0)) // [0,3]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]
console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([-2, -7, 0, 2, 11, 15, 5,], 8)) // [1,5]
console.log(twoSum([-2, -1, 0, 2, 90, 15, 8], 8)) // [2,6]


/**
 * Sort the array (merge sort O(nlogn))
 * Pick the leftmost number and look for a counterpart from the right end (binary search O(n**2logn))
 * Look for both numbers from the initial array and return their index (linear search O(n))
 */

// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>();
//
//     for(let i = 0; i < nums.length; i++) {
//         const key = nums[i];
//         const need = target - key;
//         if(map.has(need)) return [map.get(need)!, i];
//         map.set(key, i);
//     }
//
//     return []
// };