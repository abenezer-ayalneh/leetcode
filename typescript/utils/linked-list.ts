/**
 * A Class definition for a singly-linked list
 */
export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const generateListNode = (nums: number[]): ListNode | null => {
    if (nums.length === 0) return null;

    let result = new ListNode();
    let current = result;

    for (const value of nums) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return result.next;
}

export const asArray = (node: ListNode | null) => {
    const result = []
    while (node) {
        result.push(node.val)
        node = node.next;
    }

    return result;
}