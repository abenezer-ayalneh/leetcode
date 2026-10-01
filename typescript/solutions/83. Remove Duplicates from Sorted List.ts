import {asArray, generateListNode, ListNode} from "../utils/linked-list.ts";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result = new ListNode()
    let current = result

    while (head) {
        if (current.val !== head.val) {
            current.next = new ListNode(head.val)
            current = current.next
        }

        head = head.next
    }

    return result.next
}

console.log(asArray(deleteDuplicates(generateListNode([1, 1, 2])))) // [1,2]
console.log(asArray(deleteDuplicates(generateListNode([1, 1, 2, 3, 3])))) // [1,2,3]
console.log(asArray(deleteDuplicates(generateListNode([0, 0, 0, 0, 0])))) // [0]