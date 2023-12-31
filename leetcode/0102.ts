// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const t = new TreeNode(3, new TreeNode(4, new TreeNode(12)), new TreeNode(5, new TreeNode(6)));

function levelOrder(root: TreeNode | null): number[][] {
    let arrayLike: any[] = [];

    let queue: { node: TreeNode; depth: number }[] = [];
    if (root) {
        queue.push({ node: root, depth: 0 });
    }
    while (queue.length > 0) {
        const n = queue.shift();
        if (n) {
            if (arrayLike[n.depth]) {
                arrayLike[n.depth].push(n.node.val);
            } else {
                arrayLike[n.depth] = [n.node.val];
            }

            if (n.node.left) queue.push({ node: n.node.left, depth: n.depth + 1 });
            if (n.node.right) queue.push({ node: n.node.right, depth: n.depth + 1 });
        }
    }

    return arrayLike;
}
