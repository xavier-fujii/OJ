// https://leetcode.com/problems/course-schedule/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    const adj = [];
    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }
    for (const [source, destination] of prerequisites) {
        adj[source].push(destination);
    }
    return !isCyclic(adj);
}

function isCyclicUtil(i, visited, recStack, adj) {
    if (recStack[i]) return true;

    if (visited[i]) return false;

    visited[i] = true;
    recStack[i] = true;

    let children = adj[i];

    for (const c of children) {
        if (isCyclicUtil(c, visited, recStack, adj)) return true;
    }

    recStack[i] = false;

    return false;
}

function isCyclic(adj) {
    const len = adj.length;
    let visited = new Array(adj.length);
    let recStack = new Array(adj.length);
    for (let i = 0; i < len; i++) {
        visited[i] = false;
        recStack[i] = false;
    }
    for (let i = 0; i < len; i++) {
        if (isCyclicUtil(i, visited, recStack, adj)) return true;
    }

    return false;
}

console.log(
    canFinish(2, [
        [1, 0],
        [0, 1],
    ])
);
console.log(canFinish(2, [[1, 0]]));
console.log(
    canFinish(5, [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
    ])
);

console.log(canFinish(2, [[0, 1]]));
