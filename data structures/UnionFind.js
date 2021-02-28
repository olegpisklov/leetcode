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
}