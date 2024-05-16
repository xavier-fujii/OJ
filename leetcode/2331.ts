class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function evaluateTree(root: TreeNode | null): boolean {
    if (root?.val === 1) {
        return true
    } else if (root?.val === 0) {
        return false
    } else if (root?.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    } else if (root?.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right)
    } else {
        return true
    }
}
