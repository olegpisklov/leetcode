module.exports = class GraphNode {
    constructor(value, adjacent) {
        this.value = value;
        this.visited = false;
        this.adjacent = adjacent || [];
    }
}