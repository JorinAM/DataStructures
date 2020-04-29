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

    // remove the first node in the list
    public removeFirst(): Node<T> {
        // we are only intrested when the list has at least one node, otherwise return return this.first which is null
        if (this.first !== null) {
            // use a temporary node that points to the node which will be removed
            const tempNode: Node<T> = this.first;

            // move first to the next node in the list
            this.first = this.first.getNext();

            // when first === null, this means that there was only one node left at the time removeFirst was invoked
            if(this.first === null) {
                this.last = null;
            }

            // unlink the first node from the rest of the list
            tempNode.setNext(null);
        } 

        return this.first;
    }

    // remove the last node in the list
    public removeLast(): Node<T> {
        // remove the last node when the list has more than 1 node 
        if (this.first !== null && this.first.getNext() !== null) {
            // stores the node which will become the new last node in the list
            let previousNode: Node<T> = null;

            // stores the currently searched node, eventually it will store the node to be removed
            let currentNode: Node<T> = this.first;

            // traverse the list so the second to last / new last node can be found
            while (currentNode.getNext() !== null) {
                previousNode = currentNode;
                currentNode = currentNode.getNext();
            }

            // set the second to last node as the new last node
            this.last = previousNode;

            // remove the link to the former last node
            this.last.setNext(null); 

        } else { // the list has either exactly one node or no nodes at all
            this.first = null;
            this.last = null;
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