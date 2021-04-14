import SinglyLinkedList from './algorithms/SingleLinkedList/singlyLinkedList';

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertAtEnd('100');
singlyLinkedList.insertAtEnd('200');
singlyLinkedList.insertAtEnd('300');
// singlyLinkedList.removeEnd();
// singlyLinkedList.removeEnd();
// singlyLinkedList.removeEnd();
// singlyLinkedList.removeFront();
singlyLinkedList.insertAtFront('000');
singlyLinkedList.insertNodeAtGivenPosition(2, '150')
// singlyLinkedList.removeNodeAtGivenPosition(3);
console.log('singlyLinkedList', singlyLinkedList.display());
console.log('singlyLinkedList', singlyLinkedList.reverse());
console.log('singlyLinkedList', singlyLinkedList.display());