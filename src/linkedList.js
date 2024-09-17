import node from "./node.js";

export default function linkedList() {
  let head, tail, size;
  head = null;
  tail = null;
  size = 0;

  function append(value) {
    const newNode = node();

    newNode.value = value;

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }

    size++;
  }

  function prepend(value) {
    const newNode = node();

    newNode.value = value;

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }

    size++;
  }

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function at(index) {
    if (index < 0 || index >= size) {
      return null;
    }

    let currentNode = head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  function pop() {
    if (!head) {
      return;
    }

    if (size === 1) {
      head = null;
      tail = null;
    } else {
      let currentNode = head;

      while (currentNode.nextNode !== tail) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = null;
      tail = currentNode;
    }

    size--;
  }

  function contains(value) {
    let currentNode = head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  function find(value) {
    let currentNode = head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  function toString() {
    let result = "";
    let currentNode = head;

    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += "null";
    return result;
  }

  // Zee: DIL!
  function insertAt(value, index) {}

  // Zee: DIL!
  function removeAt(index) {}

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}