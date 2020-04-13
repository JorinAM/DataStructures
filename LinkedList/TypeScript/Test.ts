import { LinkedList } from "./LinkedList";

const list: LinkedList<number> = new LinkedList<number>();

for(let i = 0; i < 10; i++) {
    list.addFirst(i);
}

printList(list);

function printList(list: LinkedList<any>): void {
    let currentNode = list.getFirst();

    while(currentNode !== null) {
        console.log(currentNode.getData());
        currentNode = currentNode.getNext();
    }
}