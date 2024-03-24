class Node {
  constructor(value = null) {
    // console.log(`Creating new node`);
    this.value = value;
    this.nextNode = null;
  }

  set nextNode(node) {
    if (node instanceof Node || node === null) {
      this._nextNode = node;
    } else {
      console.log("nextNode must be an instance of the Node class");
    }
  }

  get nextNode() {
    return this._nextNode;
  }
}

export { Node as default };
