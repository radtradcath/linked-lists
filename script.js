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
      return "end";
    }

    if (counter === index) {
      return node;
    }

    return at(index - 1, node.nextNode);
  }

  function pop(node = this.list) {
    if (node.nextNode.nextNode === null) {
      node.nextNode = null;
      return;
    }
    return pop(node.nextNode);
  }

  function contains(value, node = this.list) {
    if (node.value === value) {
      return true;
    }

    if (node.nextNode === null) {
      return false;
    }

    return contains(value, node.nextNode);
  }

  function find(value, node = this.list, index = 0) {
    if (node.value === value) {
      return index;
    }
    if (node.nextNode === null) {
      return null;
    }

    return find(value, node.nextNode, index + 1);
  }

  function listToString(node = this.list) {
    if (node.nextNode === null) {
      return "null";
    }

    return `${node.value} -> ` + listToString(node.nextNode);
  }

  function insertAt(value, index) {
    let newNode = NodeClass();
    newNode.value = value;

    let nodeAtIndex = this.at(index);
    let nodeBeforeIndex = this.at(index - 1);
    newNode.nextNode = nodeAtIndex;
    nodeBeforeIndex.nextNode = newNode;
  }

  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    listToString,
    insertAt,
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
console.log(linked.list);
console.log(linked.contains("Second"));
console.log(linked.find("First"));
console.log(linked.find("I dont exist"));
linked.insertAt('Inserted', 2)
console.log(linked.listToString());
