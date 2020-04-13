export class Node<T> {
    private data: T;
    private next: Node<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    public getData() {
        return this.data;
    }

    public getNext() {
        return this.next;
    }

    public setNext(node: Node<T>) {
        this.next = node;
    }
}