
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtEnd(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    insertAtFront(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeEnd() {
        if (!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    removeFront() {
        if (!this.head) {
            console.log('No node in the list');
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    print() {
        let nodeList = [];
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        let currentNode = this.head;
        while (currentNode) {
            nodeList.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(nodeList);
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
    insertNodeAtGivenPosition(index, value) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === this.length) {
            return this.insertAtEnd(value);
        }
        if (index === 0) {
            return this.insertAtFront(value);
        }
        const prevNode = this.getNode(index - 1);
        const newNode = new Node(value);
        const temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    removeNodeAtGivenPosition(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.removeFront();
        }
        if (index === this.length - 1) {
            return this.removeEnd();
        }
        const prevNode = this.getNode(index);
        const removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        return removeNode;
    }
    reverse() {
        // let node = this.head;
        // this.head = this.tail;
        // this.tail = node;
        // let prev = null;
        // let next;
        // for (let i = 0; i < this.length; i++) {
        //     // console.log(node.val)
        //     next = node.next;
        //     // console.log(next);
        //     node.next = prev;
        //     prev = node;
        //     // console.log(prev);
        //     node = next;
        // }
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

}