class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Set new node's next to current head
            newNode.next = this.head;
            // Set the current head's prev to new node
            this.head.prev = this.newNode;
            // Set list's head to new node
            this.head = newNode
        }
        this.length++;
        return this;
    }

    insertAtEnd(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // The current tail should point forward (= next) to the new node
            this.tail.next = newNode;
            // The new node should point back (= prev) to the current tail
            newNode.prev = this.tail;
            // The new node should become the new tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    insertNodeAtGivenPosition(index, value) {
        let current = this.head;
        if (index === 0) {
            return this.insertAtFront(value);
        } else if (index >= this.length) {
            return this.insertAtEnd(value);
        } else {
            let prevNode = this.getNode(index - 1);
            const newNode = new Node(value);
            current = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = current;
            current.prev = newNode;
            this.length++;
            return this;
        }
    }
    //
    removeFront() {
        if (!this.head) {
            console.log('No node in the list');
            return undefined;
        }
        const currentNode = this.head;
        this.head = currentNode.next;
        this.head.prev = null;
        currentNode.next = null;
        this.length--;
        return this;
    }
    removeEnd() {
        const nodeToBeDelete = this.tail;
        if (!this.length) {
            return null;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            nodeToBeDelete.prev = null;
        }
        this.length--;
        return this;
    }
    removeNodeAtGivenPosition(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.removeFront();
        } else if (index === this.length - 1) {
            return this.removeEnd();
        }

        const prevNode = this.getNode(index - 1);
        const nextNode = this.getNode(index + 1);
        const nodeToBeDelete = this.getNode(index);
        // console.log(prevNode)
        nodeToBeDelete.next = null;
        nodeToBeDelete.prev = null;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length--;
        return this;
    }

    getNode(index) {
        let count = 0;
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }


    // Print Node
    print() {
        const list = [];
        if (!this.head) {
            return 'List is an empty, Please insert some data to list.';
        }
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(list);
    }
}