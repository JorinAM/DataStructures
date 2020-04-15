import { LinkedList } from "./LinkedList";

(function runTests(): void {
    testSetFirstMethod();
    console.log("\n");
    testSetLastMethod();
})();

function printList(list: LinkedList<any>): void {
    let currentNode = list.getFirst();

    while(currentNode !== null) {
        console.log(currentNode.getData());
        currentNode = currentNode.getNext();
    }
}

function testSetFirstMethod(): void {
    const list: LinkedList<number> = new LinkedList<number>();

    for(let i = 0; i < 10; i++) {
        list.setFirst(i);
    }
    
    printList(list);
}

function testSetLastMethod(): void {
    const list: LinkedList<number> = new LinkedList<number>();

    for(let i = 0; i < 10; i++) {
        list.setLast(i);
    }

    printList(list);
}