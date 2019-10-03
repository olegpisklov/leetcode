class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.size = 0;
    }

    insert(value) {
        if (value > this.value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BinaryNode(value);
            }
        } else {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left =  new BinaryNode(value);
            }
        }

        ++this.size;
    }

    find(value) {
        if (value === this.value) {
            return this;
        } else if (value <= this.value) {
            return this.left ? this.left.find(value) : null;
        } else if (value > this.value) {
            return this.right ? this.right.find(value) : null;
        }
        return null;
    }

    getRandomeNode() {
        const leftSize = this.left ? this.left.size() : 0;  
        const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
        const index = getRandomInt(this.size);

        if (index < leftSize) {
            return this.left.getRandomeNode();
        } else if (index === leftSize) {
            return this;
        } else {
            return this.right.getRandomeNode();
        }
    }

    delete(value) {

    }
}