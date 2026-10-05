/**
 * 88. Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * Example 2:
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * Example 3:
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 *
 *
 * Constraints:
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -109 <= nums1[i], nums2[j] <= 109
 *
 *
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 */

/**
 * Do not return anything, modify nums1 in-place instead.
 *
 * Plan:
 * Keep index1 for nums1 and index2 for nums2.
 * Loop until index1 is less than m + index2. This is because every increment in index2 means a number has been merged in the nums1 index inplace.
 * Thus, pushing the limit or last index of num1.
 * Keep incrementing index1 until you find a number in nums2 which is less than the value at index1.
 * Then collect numbers from num2 that are less than or equal to the number at index1, pop a zero for each collected number, place all the collected numbers
 * into num1 starting from the index1 position, and increment index2 by the length of those numbers.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m - 1
    let index2 = n - 1
    let placementIndex = nums1.length - 1

    while (index2 >= 0) {
        if (index1 < 0) {
            nums1.splice(0, nums2.slice(0, index2 + 1).length, ...nums2.slice(0, index2 + 1))
            break
        } else if (nums1[index1] >= nums2[index2]) {
            nums1.splice(placementIndex, 1, nums1[index1])
            index1--
        } else if (nums1[index1] < nums2[index2]) {
            nums1.splice(placementIndex, 1, nums2[index2])
            index2--
        }

        placementIndex--
    }

    console.log(nums1)
}

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3) //[1,2,3,4,5,6]
merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6) // [-1,0,0,1,1,1,2,3,3]
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([1], 1, [], 0) // [1]
merge([0], 0, [1], 1) // [1]
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3) // [-1,0,0,1,2,2,3,3,3]