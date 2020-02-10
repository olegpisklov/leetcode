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
  
  const reverse_sub_list = function(head, p, q) {
    let pElement = head;
    let qElement = null;
    
    let currentElement = head;
    let currentPointer = 1;
  
    while (currentElement) {
      if (currentPointer === p - 1) {
        pElement = currentElement;
      }
  
      if (currentPointer === q + 1) {
        qElement = currentElement;
      }
  
      ++currentPointer;
      currentElement = currentElement.next;
    }
  
    currentElement = pElement.next;
    currentPointer = 1;
  
    let prev = null;
  
    while (currentElement !== qElement) {
      const next = currentElement.next;
      currentElement.next = prev;
      prev = currentElement;
      currentElement = next;
    }
  
    pElement.next = prev;
    currentElement = head;
  
    while (currentElement.next) {
      currentElement = currentElement.next;
    }
  
    currentElement.next = qElement
  
    return head;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
  