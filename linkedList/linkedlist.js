function Node(data, next = null) {
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
      head.next = newNode;
    }
  };

  this.deleteAt = (index) => {
    if (this.head == null) {
      console.log("Warning:: Index out of bound");
      return;
    }

    if (index == 1) {
      this.head = this.head.next;
      return;
    }

    let head = this.head;
    let countIndex = 0;
    while (head.next) {
      if (countIndex == index - 2) {
        break;
      }
      countIndex++;
      head = head.next;
    }

    if (countIndex == index - 2) {
      console.log(head);

      head.next = head.next.next;
      console.log(head);
    } else {
      console.log("Warning:: Index out of bound");
    }
  };

  this.reverse = () => {
    let head = this.head;
  };

  this.addAtFirst = (val) => {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  };

  this.addAtLast = (val) => {
    let newMode = new Node(val);

    if (this.head === null) {
      this.head = newMode;
    }

    let head = this.head;
    while (head.next) {
      head = head.next;
    }

    head.next = new Node(val);
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

  this.size = () => {
    let size = 0;
    let head = this.head;

    while (head) {
      head = head.next;
      size++;
    }

    return size;
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
linkedList.insertAt(1, 95);
linkedList.insertAt(10, 100);
linkedList.print();
console.log(linkedList.size());
linkedList.deleteAt(1);
linkedList.print();
console.log(linkedList.size());
linkedList.deleteAt(5);
linkedList.print();
console.log(linkedList.size());
