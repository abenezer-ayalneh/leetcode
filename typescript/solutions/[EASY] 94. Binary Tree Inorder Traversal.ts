/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 *
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3]
 *
 * Output: [1,3,2]
 *
 * Example 2:
 *
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 *
 * Output: [4,2,6,5,7,1,3,9,8]
 *
 *  Example 3:
 *
 * Input: root = []
 *
 * Output: []
 *
 * Example 4:
 *
 * Input: root = [1]
 *
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 * - The number of nodes in the tree is in the range [0, 100].
 *
 * - -100 <= Node.val <= 100
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
import {constructTree, TreeNode} from "../utils/tree.ts";

function inorderTraversal(root: TreeNode | null): number[] {
    if (root == null) {
        return []
    }
    if (root.right == null && root.left == null) {
        return [root.val]
    }

    const result: number[] = [];
    const parents: TreeNode[] = [];
    let currentNode: TreeNode | null | undefined = root;

    while (currentNode) {
        if (currentNode.left) {
            const temp = currentNode
            currentNode = currentNode.left
            temp.left = null
            parents.push(temp)
        } else if (currentNode.right) {
            result.push(currentNode.val)
            currentNode = currentNode.right
        } else {
            result.push(currentNode.val)
            currentNode = parents.pop()
        }
    }

    return result
}

console.log(inorderTraversal(constructTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))) // [4,2,6,5,7,1,3,9,8]
console.log(inorderTraversal(constructTree([1, null, 2, 3]))) // [1,3,2]
console.log(inorderTraversal(constructTree([]))) // []
console.log(inorderTraversal(constructTree([1]))) // [1]
console.log(inorderTraversal(constructTree([30, 9, -100, 100, 0, null, null, 50, 40]))) // [50, 100, 40, 9, 0, 30, -100]
