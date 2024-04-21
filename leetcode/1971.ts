// https://leetcode.com/problems/find-if-path-exists-in-graph

type Coll = Map<number, Set<number> | undefined>

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (source === destination) return true
    const collections: Coll = new Map()
    for (const [n1, n2] of edges) {
        let n1Neighbors = collections.get(n1)
        if (!n1Neighbors) {
            collections.set(n1, new Set())
        }
        collections.get(n1)?.add(n2)
    }
    for (const [n2, n1] of edges) {
        let n1Neighbors = collections.get(n1)
        if (!n1Neighbors) {
            collections.set(n1, new Set())
        }
        collections.get(n1)?.add(n2)
    }

    return search(collections, source, destination)
}

function search(col: Coll, source: number, destination: number) {
    let result = false
    let reached = new Set<number>()

    const searchHelper = (src: number) => {
        reached.add(src)
        const neighbors = col.get(src)
        if (neighbors) {
            if (neighbors.has(destination)) result = true
            else {
                for (const neighbor of neighbors) {
                    if (!reached.has(neighbor)) {
                        searchHelper(neighbor)
                    }
                }
            }
        }
    }

    searchHelper(source)
    return result
}
