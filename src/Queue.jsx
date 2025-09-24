export default class Queue {
    constructor(){
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.length > 0 ? this.items.shift() : null;
    }

    peek() {
        return this.length > 0 ? this.items[0] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size () {
        return this.items.length;
    }

    getAll(){
        return [...this.items];
    }
}