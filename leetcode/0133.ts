// https://leetcode.com/problems/clone-graph/
/**
 * Definition for Node.
 */
class Node2 {
    val: number
    neighbors: Node2[]
    constructor(val?: number, neighbors?: Node2[]) {
        this.val = val === undefined ? 0 : val
        this.neighbors = neighbors === undefined ? [] : neighbors
    }
}

function cloneGraph(node: Node2 | null): Node2 | null {
    const newNodesMap = new Map<number, Node2>()

    function clone(node: Node2 | null): Node2 | null {
        let newNode: Node2 | null = null

        if (node) {
            let nodeCache = newNodesMap.get(node.val)

            if (nodeCache) {
                newNode = nodeCache
            } else {
                newNode = new Node2(node.val)
                newNodesMap.set(node.val, newNode)
                for (const neighbor of node.neighbors) {
                    const n = clone(neighbor)
                    if (n) {
                        newNode.neighbors.push(n)
                    }
                }
            }
        }
        return newNode
    }

    return clone(node)
}
