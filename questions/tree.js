class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  addNode(node) {
    if (this.value > node.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }

  inOrderTraverse() {
    if (this.left) {
      this.left.inOrderTraverse();
    }
    console.log(this.value);
    if (this.right) {
      this.right.inOrderTraverse();
    }
  }

  preOrderTraverse() {
    console.log(this.value);
    if (this.left) {
      this.left.preOrderTraverse();
    }
    if (this.right) {
      this.right.preOrderTraverse();
    }
  }

  postOrderTraverse() {
    if (this.left) {
      this.left.postOrderTraverse();
    }
    if (this.right) {
      this.right.postOrderTraverse();
    }
    console.log(this.value);
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  inOrderTraverse() {
    if (this.root) {
      this.root.inOrderTraverse();
    }
  }

  preOrderTraverse() {
    if (this.root) {
      this.root.preOrderTraverse();
    }
  }

  postOrderTraverse() {
    if (this.root) {
      this.root.postOrderTraverse();
    }
  }

  traverseBFS() {
    let res = [];
    if (this.root) {
      let q = [this.root];

      while (q.length) {
        let current = q.shift();
        res.push(current.value);

        if (current && current.left) {
          q.push(current.left);
        }

        if (current && current.right) {
          q.push(current.right);
        }
      }
    }

    return res.join(", ");
  }

  getMin() {
    let min;
    if (this.root) {
      let current = this.root;

      while (current.left) {
        current = current.left;
      }

      min = current.value;
    }
    return min;
  }

  getMax() {
    let min;
    if (this.root) {
      let current = this.root;

      while (current.right) {
        current = current.right;
      }

      min = current.value;
    }
    return min;
  }

  getHeight(node = this.root) {
    if (node) {
      let leftHeight = node.left ? this.getHeight(node.left) : 0;
      let rightHeight = node.right ? this.getHeight(node.right) : 0;

      return Math.max(leftHeight, rightHeight) + 1;
    } else {
      return -1;
    }
  }
}

const bst = new BST();
bst.add(15);
bst.add(25);
bst.add(10);
bst.add(7);
bst.add(22);
bst.add(17);
bst.add(13);
bst.add(5);
bst.add(9);
bst.add(27);

console.log("In Order Traversal");
bst.inOrderTraverse();
console.log(" ");

console.log("Pre Order Traversal");
bst.preOrderTraverse();
console.log(" ");

console.log("Post Order Traversal");
bst.postOrderTraverse();
console.log(" ");

console.log(`Min value in tree\n${bst.getMin()}`);
console.log(" ");

console.log(`Max value in tree\n${bst.getMax()}`);
console.log(" ");

console.log(`BFS traversal\n${bst.traverseBFS()}`);
console.log(" ");

console.log(`Height of tree\n${bst.getHeight()}`);

console.log(JSON.stringify(bst));
