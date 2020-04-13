import { Node } from "./Node";

export class LinkedList<T> {
    private first: Node<T>;

    constructor() {
        this.first = null;
    }

    // insert at the beginning of the list 
    public addFirst(data: T): Node<T> {
        if (this.first == null) {
            this.first = new Node<T>(data);
            return this.first;
        } else {
            // create new node
            const newNode: Node<T> = new Node<T>(data);

            // create link between new node to current first node 
            newNode.setNext(this.first);

            // change the beginning of the list to the new node 
            this.first = newNode;
        }
    }

    //return the first node in the list
    public getFirst() {
        return this.first;
    }
}