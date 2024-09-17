import node from "./node";

export default function linkedList() {

    let head, tail, size;
    head = null;
    tail = null;
    size = 0;

    function append(value) {
        const node = node();
        
        node.value = value;

        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.nextNode = node;
            tail = node;
        }

        size++;
    }

    function prepend(value) {
        const node = node();
        
        node.value = value;

        if (!head) {
            head = node;
            tail = node;
        } else {
            node.nextNode = head;
            head = node;
        }

        size++;
    }

    function size() {
        return size;
    }

    function head() {
        return head;
    }

    function tail() {
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

    }

    function find(value) {

    }

    function toString() {

    }

    function insertAt(value, index) {

    }

    function removeAt(index) {

    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };

}