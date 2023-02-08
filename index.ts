import LinkedList from "./LinkedList";

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insertAt(1, 1.5);
linkedList.insertAt(3, 2.5);
linkedList.insertHead(-1);

linkedList.remove(1);
linkedList.removeAt(0);
linkedList.removeHead();
linkedList.removeTail();

linkedList.print();
linkedList.getAt(2);

export {};
