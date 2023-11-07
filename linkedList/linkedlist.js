function Node(data, next) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;

  this.add = (val) => {
    let newMode = new Node(val);

    if (this.head == null) {
      this.head = newMode;
      return;
    }

    let head = this.head;
    while (head?.next) {
      head = head.next;
    }

    head.next = newMode;
  };

  this.insertAt = (index, val) => {
    let newNode = new Node(val);

    if (this.head == null) {
      console.log("Warning:: Index is out of bound. Adding it to last");
      this.head = newNode;
      return;
    }
    let head = this.head;
    let countIndex = 0;

    while (head.next) {
      if (countIndex == index - 1) {
        break;
      }
      countIndex++;
      head = head.next;
    }

    if (countIndex == index - 1) {
      newNode.next = head.next;
      head.next = newNode;
    } else {
      console.log("Warning:: Index is out of bound. Adding it to last");
      head = newNode;
    }
  };

  this.print = () => {
    let head = this.head;
    let str = "";
    while (head) {
      str += `[${head.data}] -> `;
      head = head.next;
    }
    console.log(`Linked List Data: ${str}[null]`);
  };
}

let linkedList = new LinkedList();
linkedList.insertAt(1, 10);
linkedList.add(1);
linkedList.print();
linkedList.add(2);
linkedList.print();
//console.log(linkedList.head);
linkedList.insertAt(1, 3);
linkedList.print();
