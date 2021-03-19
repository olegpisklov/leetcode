class FileSystem {
    constructor() {
        this.trie = new Trie();
    }

    createPath(path, value) {
        return this.trie.add(path, value);
    }

    get(path) {
        return this.trie.get(path);
    }
}

class Trie {
    constructor() {
        this.map = {};
    }

    add(path, val) {
        const pathArr = path.split('/');

        if (pathArr.length <= 1) {
            return false;
        }

        let node = this.map;

        for (let i = 1; i < pathArr.length - 1; ++i) {
            const folder = pathArr[i];

            if (node[folder] === undefined) {
                return false;
            }

            node = node[folder];
        }

        const folder = pathArr.pop();

        node[folder] = { val };

        return true;
    }

    get(path) {
        const pathArr = path.split('/');

        if (pathArr.length <= 1) {
            return false;
        }

        let node = this.map;

        for (let i = 1; i < pathArr.length; ++i) {
            const folder = pathArr[i];

            if (node[folder] === undefined) {
                return -1;
            }

            node = node[folder];
        }

        return node.val;
    }
}

const fs = new FileSystem();

console.log(fs.createPath("/leet", 1));
console.log(fs.createPath("/leet/code", 2));
console.log(fs.get("/leet/code"));
console.log(fs.createPath("/c/d",1));
console.log(fs.get("/c"));


