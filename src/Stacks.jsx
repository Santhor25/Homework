export default class Stack {
    constructor(){
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.length > 0 ? this.items.pop() : null;
    }

    peek() {
        return this.length > 0 ? this.items[this.items.length - 1 ] : null;
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