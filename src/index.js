import DoublyLinkedList from './algorithms/LinkedList/doublyLinkedList';
import SinglyLinkedList from './algorithms/LinkedList/singlyLinkedList';

const list = new SinglyLinkedList();
list.insertAtEnd(100);
list.insertAtEnd(200);
list.insertAtEnd(300);
list.insertAtFront(50);
list.insertNodeAtGivenPosition(2, 150);
// list.insertNodeAtGivenPosition(4, 250);
list.print();
// list.removeNodeAtGivenPosition(2);
list.print();
// list.reverse();
// list.swap(2);
list.deleteMiddleNode();
list.print();
// console.log(list)