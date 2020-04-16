import { LinkedList } from "./LinkedList";

function printList(list: LinkedList<any>): void {
    let currentNode = list.getFirst();

    while(currentNode !== null) {
        console.log(currentNode.getData());
        currentNode = currentNode.getNext();
    }
}

function runTest(testName: string, test: Function): void {
    const list: LinkedList<number> = new LinkedList<number>();
    test(list);
}

function loopMethod(iterations: number, methodName: string, list: LinkedList<any>): void {
    for(let i = 0; i < iterations; i++) {
        try {
            list[methodName](i);
        } catch {
            throw new Error(`${methodName} does not exist`);
        }
    }
}

runTest("setFirst", (list: LinkedList<any>): void => {
    loopMethod(15, "setFirst", list);
    printList(list);
});

runTest("setLast", (list: LinkedList<any>): void => {
    loopMethod(10, "setLast", list);
    printList(list);
});

runTest("removeFirst", (list: LinkedList<any>): void => {
    loopMethod(10, "setFirst", list);
    loopMethod(5, "removeFirst", list);
    printList(list);
});
