class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      result = "";
      temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
  
  const reverse_every_k_elements = function(head, k) {
    let breakPoint = null;
    let result = null;
    let current = head;
  
    while (true) {
      let i = 0;
      let sublist = null;
      const startNode = current;
  
      while (i < k && current) {
        const next = current.next;
        current.next = sublist;
        sublist = current;
        current = next;
        ++i;
      }
  
      if (!result) {
        result = sublist;
      } else {
        breakPoint.next = sublist;
      }
  
      breakPoint = startNode;
  
      if (!current) {
        break;
      }
    }
  
    return result;
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  head.next.next.next.next.next.next = new Node(7)
  head.next.next.next.next.next.next.next = new Node(8)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)
  