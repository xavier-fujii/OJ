// https://leetcode.com/problems/distribute-coins-in-binary-tree

function getCoinsRequired(root: TreeNode | null): number {
    if (root === null) return 0
    return 1 - root.val + getCoinsRequired(root.left) + getCoinsRequired(root.right)
}

function distributeCoins(root: TreeNode | null): number {
    if (root === null) return 0

    let leftRequired = getCoinsRequired(root.left)
    let rightRequired = getCoinsRequired(root.right)

    return (
        Math.abs(leftRequired) +
        distributeCoins(root.left) +
        Math.abs(rightRequired) +
        distributeCoins(root.right)
    )
}
