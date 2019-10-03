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
    }

    find(value) {

    }

    getRandomeNode() {

    }

    delete(value) {

    }
}