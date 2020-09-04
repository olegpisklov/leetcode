class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
  const reverse = function(head) {
    let prev = null;
    let current = head;
  
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  };
  
var reverseReq = function(head) {
    const res = {head: null};
    
    helper(head, res);
    
    return res.head;
};

const helper = (node, res) => {
    if (!node.next) {
        res.head = node;
        return node;
    }

    const pr = helper(node.next, res);
    
    node.next = null
    pr.next = node;
    
    return node;
}


  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverseReq(head).get_list()}`)
  
  