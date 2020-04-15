import { Node } from "./Node";

export class LinkedList<T> {
    private first: Node<T>;
    private last: Node<T>;

    constructor() {
        this.first = null;
        this.last = null;
    }

    // insert a node at the start of the list 
    public setFirst(data: T): Node<T> {
        // the list is empty, first and last will point to the same node
        if (this.first === null) {
            //create new node
            this.first = new Node<T>(data);

            // last points to the same node as first
            this.last = this.first;

        } else {
            // create new node
            const newNode: Node<T> = new Node<T>(data);

            // create link between new node to current first node 
            newNode.setNext(this.first);

            // ensure first now points to the new node, to ensure that it is the first node in the list
            this.first = newNode;
        }

        return this.first;
    }

    // insert a node at the end of the list
    public setLast(data: T): Node<T> {
        // the list is empty, first and last will point to the same node
        if (this.last === null) {
            // create new node
            this.last = new Node<T>(data);

            // first points to the same node as last 
            this.first = this.last;

        } else {
            // temporary node which holds the current last node in the list
            const tempNode: Node<T> = this.last;

            // create new node and ensure last now holds the new last node
            this.last = new Node<T>(data);

            // ensure that the former last node now has a link to the new last node
            tempNode.setNext(this.last);
        }

        return this.last;
    }

    // return the first node in the list
    public getFirst(): Node<T> {
        return this.first;
    }

    // return the last node in the list
    public getLast(): Node<T> {
        return this.last;
    }
}