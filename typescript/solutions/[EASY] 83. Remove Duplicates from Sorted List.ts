/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 * Example 2:
 *
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 */

import {generateListNode, ListNode, listNodeAsArray} from "../utils/linked-list.ts";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const result = head;
    let current = head;

    while (current !== null) {
        while (current.val === current.next?.val) {
            current.next = current.next!.next;
        }

        current = current.next;
    }

    return result
}

console.log(listNodeAsArray(deleteDuplicates(generateListNode([1, 1, 2])))) // [1,2]
// console.log(listNodeAsArray(deleteDuplicates(generateListNode([1, 1, 2, 3, 3])))) // [1,2,3]
// console.log(listNodeAsArray(deleteDuplicates(generateListNode([0, 0, 0, 0, 0])))) // [0]
// console.log(listNodeAsArray(deleteDuplicates(generateListNode([])))) // []
