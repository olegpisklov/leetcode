const prefixSearch = (businesNames, searchTerm) => {
    const trie = new Trie();

    for (let i = 0; i < businesNames.length; ++i) {
        const words = businesNames[i].split(' ');

        words.forEach(word => trie.add(word, i));
    }

    const searchWords = searchTerm.split(' ');
    const resultIndexes = [];

    searchWords.forEach(word => 
        resultIndexes.push(trie.search(word))
    );
    
    let intersection = findIntersection(resultIndexes);
    
    return businesNames.filter((name, i) => intersection.includes(i));
}

const findIntersection = (arr) => {
    let intersection = [...arr[0]];

    for (let i = 1; i < arr.length; ++i) {
        intersection = arr[i].filter(ind => intersection.includes(ind));
    }

    return intersection;
}

class Trie {
    constructor() {
        this.map = {};
    }

    add(word, ind) {
        let node = this.map;

        for (let i = 0; i < word.length; ++i) {
            const char = word[i];

            if (node[char] === undefined) {
                node[char] = {};
                node.indexes = [ind];
            } else {
                node.indexes.push(ind);
            }

            node = node[char];
        }
    }

    search(term) {
        const node = this.__search(this.map, term, 0);

        return node === null ? [] : node.indexes;
    }


    __search(node, term, ind) {
        if (!node[term[ind]]) {
            return null;
        }

        if (ind === term.length - 1) {
            return node;
        }

        return this.__search(node[term[ind]], term, ind + 1);
    }

}

console.log(prefixSearch(["burger king", "McDonald's", "super duper burger's", "subway", "pizza hut"], 'bur'));
console.log(prefixSearch(["burger king", "McDonald's", "super duper burger's", "subway", "pizza hut"], 'duper bur'));
console.log(prefixSearch(["burger king", "McDonald's", "super duper burger's", "subway", "pizza hut"], 'kin'));
