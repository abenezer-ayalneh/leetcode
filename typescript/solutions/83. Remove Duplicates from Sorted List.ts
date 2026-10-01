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
