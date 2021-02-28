class UnionFind {
    constructor(size) {
        this.parents = new Array(size).fill(0).map((val, ind) => ind);
        this.componentsNumber = size;
    }

    find(u) {
        if (this.parents[u] !== u) {
            this.parents[u] = this.find(this.parents[u]); // path compression
        }
        return this.parents[u];
    }

    union(u, v) {
        const p1 = this.find(u);
        const p2 = this.find(v);

        if (p1 !== p2) {
            this.parents[p1] = p2; // or parents[p2] = p1 which does not matter
            --this.componentsNumber;
        }
    }

    getCommponenstNumber() {
        return this.componentsNumber;
    }
}

const minCost = (n, edges, edgesToRepair) => {
    const uf = new UnionFind(n + 1);
    const brokenEdgesSet = new Set();

    const isInEdgesToRepair = ([u, v]) => {
        return brokenEdgesSet.has([u, v].toString()) || 
            brokenEdgesSet.has([v, u].toString());
    }
    // since our edges are 1 based we'll have an extra "0" component.
    const isAllConnected = () => uf.getCommponenstNumber() === 2;


    edgesToRepair.forEach(([u, v]) => {
        brokenEdgesSet.add([u, v].toString());
    });
    
    for (let [u, v] of edges) {
        if (!isInEdgesToRepair([u, v])) {
            uf.union(u, v);
        }
    }

    edgesToRepair.sort((a, b) => (a[2] - b[2]));

    let res = 0;

    for (const [u, v, cost] of edgesToRepair) {
        if (uf.find(u) !== uf.find(v)) {
            uf.union(u, v);
            res += cost;
        }
    }

    return isAllConnected() ? res : -1;
}

console.log(minCost(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], [[1, 2, 12], [3, 4, 30], [1, 5, 8]]));
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], [[1, 6, 410], [2, 4, 800]]));
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], [[1, 5, 110], [2, 4, 84], [3, 4, 79]]));