class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertNode = (node, root) => {
      if (node.value > root.value) {
        if (root.right) {
          insertNode(node, root.right);
        } else {
          root.right = node;
        }
      } else if (node.value < root.value) {
        if (root.left) {
          insertNode(node, root.left);
        } else {
          root.left = node;
        }
      }
    };
    const newNode = new BstNode(value);
    if (this.root == null) {
      this.root = newNode;
      return;
    }

    insertNode(newNode, this.root);
  }

  remove(value) {
    const removeNode = (value, root) => {};

    if (this.root == null) {
      return;
    }
  }

  inOrderTraverse() {
    const traverse = (root) => {
      if (!root) return;

      traverse(root.left);
      console.log(root.value);
      traverse(root.right);
    };
    console.log("\nIn Order Traversal");
    traverse(this.root);
  }

  preOrderTraverse() {
    const travese = (root) => {
      if (!root) return;

      console.log(root.value);
      travese(root.left);
      travese(root.right);
    };

    console.log("\nPre Order Traversal");
    travese(this.root);
  }

  postOrderTraverse() {
    const travese = (root) => {
      if (!root) return;

      travese(root.left);
      travese(root.right);
      console.log(root.value);
    };

    console.log("\nPost Order Traversal");
    travese(this.root);
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(25);
binarySearchTree.insert(10);
binarySearchTree.insert(7);
binarySearchTree.insert(22);
binarySearchTree.insert(17);
binarySearchTree.insert(13);
binarySearchTree.insert(5);
binarySearchTree.insert(9);
binarySearchTree.insert(27);
console.log(JSON.stringify(binarySearchTree.root));

binarySearchTree.inOrderTraverse();
binarySearchTree.preOrderTraverse();
binarySearchTree.postOrderTraverse();
