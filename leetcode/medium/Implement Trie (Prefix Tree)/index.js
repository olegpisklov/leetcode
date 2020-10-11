class TrieNode {
    constructor() {
        this.links = new Array(26);
        this.end = false;
    }
    
    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    
    put(ch, node) {
        this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }
    
    get(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    
    setEnd() {
        this.end = true;
    }
    
    isEnd() {
        return this.end;
    }
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; ++i) {
        if (node.containsKey(word[i])) {
            node = node.get(word[i]);
        } else {
            const newNode = new TrieNode();
            
            node.put(word[i], newNode);
            
            node = newNode;
        }
    }
    
    node.setEnd();
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.__searchPrefix(word);
    return node !== null && node.isEnd();
};

Trie.prototype.__searchPrefix = function(prefix) {
    let node = this.root;
    
    for (let i = 0; i < prefix.length; ++i) {
        if (!node.containsKey(prefix[i])) {
            return null;
        }
        
        node = node.get(prefix[i]);
    }
    
    return node;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.__searchPrefix(prefix) !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


class TrieWithMap {
    constructor() {
        this.endSymbol = "*";
        this.root = {}; 
    }

    insert(word) {
        let node = this.root;
        
        for (const char of word) {
            if (!(char in node)) {
                node[char] = {};
            }
            node = node[char];
        }
        
        node[this.endSymbol] = true; 
    }

    search(word) {
        let node = this.__searchPrefix(word);
        
        return node !== null && this.endSymbol in node;
    }


    startsWith(prefix) {
        let node = this.__searchPrefix(prefix);
        return  node !== null;
    }

    __searchPrefix(prefix) {
        let node = this.root;
        
        for (const char of prefix) {
            if (!(char in node)) {
                return null;
            }
            
            node = node[char];
        }
        
        return node; 
    }
}