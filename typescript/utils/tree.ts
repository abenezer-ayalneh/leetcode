/**
 * Definition for a binary tree node.
 */
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// export const constructTree = (nodes: (number | null)[]): TreeNode | null => {
//   const build = (index: number): TreeNode | null => {
//     if (index >= nodes.length || nodes[index] === null) {
//       return null;
//     }
//
//     const node = new TreeNode(nodes[index]);
//
//     node.left = build(2 * index + 1);
//     node.right = build(2 * index + 2);
//
//     return node;
//   };
//
//   return build(0);
// };

/**
 * Construct a TreeNode from a list of number and null array.
 * @param nodes
 */
export const constructTree = (nodes: (number | null)[]): TreeNode | null => {
  if (nodes.length === 0 || nodes[0] === null) {
    return null;
  }

  const root = new TreeNode(nodes[0]);
  const queue: TreeNode[] = [root];

  let index = 1;

  while (queue.length > 0 && index < nodes.length) {
    const current = queue.shift()!;

    const leftValue = nodes[index++];
    if (leftValue !== null && leftValue !== undefined) {
      current.left = new TreeNode(leftValue);
      queue.push(current.left);
    }

    if (index >= nodes.length) {
      break;
    }

    const rightValue = nodes[index++];
    if (rightValue !== null && rightValue !== undefined) {
      current.right = new TreeNode(rightValue);
      queue.push(current.right);
    }
  }

  return root;
};