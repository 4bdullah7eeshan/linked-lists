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

    }

    function at(index) {

    }

    function pop() {
        
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