function LinkedList() {
  let list = {
    value: 1,
    nextNode: null,
  };

  function append(value) {
    let newNode = NodeClass();
    newNode.value = value;

    let tailNode = tail(this.list);
    tailNode.nextNode = newNode;
  }

  function prepend(value) {
    let newNode = NodeClass();
    newNode.value = value;

    newNode.nextNode = this.list;
    this.list = newNode;
  }

  function size(node = this.list) {
    if (node.nextNode === null) {
      return 1;
    }
    return 1 + size(node.nextNode);
  }

  function head() {
    return this.list;
  }

  function tail(node) {
    if (node.nextNode === null) {
      return node;
    }

    return tail(node.nextNode);
  }

  function at(index, node = this.list) {
    let counter = 0;
    if (node === null) {
      return 'end';
    }

    if (counter === index) {
      return node;
    }

    return at(index - 1, node.nextNode);
  }

  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
  };
}

function NodeClass() {
  let value = null;
  let nextNode = null;

  return {
    value,
    nextNode,
  };
}

let linked = LinkedList();
linked.prepend("First");
linked.prepend("Second");
linked.prepend("Third");
linked.prepend("Fourth");
linked.append("Zero");
console.log(linked.list)

