/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    return dfs(node, {});
};

const dfs = (node, created) => {
    if (!node) return;

    const cloneNeighbours = [];
    const clone = new Node(node.val, cloneNeighbours);
    
    created[node.val] = clone;
    
    for (let i = 0; i < node.neighbors.length; ++i) {
        if (created[node.neighbors[i].val] !== undefined) {
            cloneNeighbours.push(created[node.neighbors[i].val]);
            continue;
        }

        const clonedN = dfs(node.neighbors[i], created);
        
        cloneNeighbours.push(clonedN);
    }
    
    return clone;
}