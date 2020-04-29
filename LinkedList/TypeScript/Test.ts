import { LinkedList } from "./LinkedList";

function printList(list: LinkedList<any>): void {
    let currentNode = list.getFirst();

    while(currentNode !== null) {
        console.log(currentNode.getData());
        currentNode = currentNode.getNext();
    }
}

function runTest(testName: string, test: () => boolean): void {
    const isPass: boolean = test();
    console.log(`Test Case: ${testName}, Passing: ${isPass}`);
}

function loopMethod(iterations: number, methodToLoop: (iteration?: number) => void): void {
    for(let i = 0; i < iterations; i++) {
        methodToLoop(i);
    }
}

runTest("setFirst", (): boolean => {
    const list: LinkedList<number> = new LinkedList<number>();

    loopMethod(15, (iteration) => {
        list.setFirst(iteration);
    });

    const result: boolean = list.getFirst().getData() === 14;

    return result;
});

runTest("setLast", (): boolean => {
    const list: LinkedList<number> = new LinkedList<number>();

    loopMethod(10, (iteration) => {
        list.setLast(iteration);
    })

    const result: boolean = list.getLast().getData() === 9;

    return result;
});

runTest("removeFirst", (): boolean => {
    const list: LinkedList<number> = new LinkedList<number>();

    loopMethod(10, (iteration) => {
        list.setFirst(iteration);
    });

    loopMethod(5, () => {
        list.removeFirst();
    });

    const result: boolean = list.getFirst().getData() === 4;

    return result;
});

runTest("removeLast", (): boolean => {
    const list: LinkedList<number> = new LinkedList<number>();
    
    loopMethod(20, (iteration) => {
        list.setFirst(iteration);
    });

    loopMethod(19, (iteration) => {
        list.removeLast();
    });

    const result: boolean = list.getLast().getData() === 19;

    return result;
});
