(function(module) {
  function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data || null;
  }

  function BinarySearchTree() {
    this.root = null;
  }

  BinarySearchTree.prototype.addNode = function(data) {
    var node = new Node(data);
    var p, q;
    if (!this.root) {
      this.root = node;
    }
    q = p = this.root;
    while (p != null) {
      q = p;
      if (data < p.data) {
        p = p.left;
      } else {
        p = p.right;
      }
    }

    if (data < q.data) {
      q.left = node;
    } else {
      q.right = node;
    }
  };

  BinarySearchTree.inOrderTravsal = function(node) {
    if (node == null) {
      return;
    } else {
      BinarySearchTree.inOrderTravsal(node.left);
      console.log(node.data);
      BinarySearchTree.inOrderTravsal(node.right);
    }
  };

  module.exports = LinkedList;
})(module);
