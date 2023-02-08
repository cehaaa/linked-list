"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = __importDefault(require("./Node"));
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        if (!this.head) {
            const payload = new Node_1.default({ value, next: null });
            this.head = payload;
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            const payload = new Node_1.default({
                value,
                next: null,
            });
            curr.next = payload;
        }
    }
    insertAt(at, value) {
        if (at === 0) {
            this.insertHead(value);
        }
        else {
            let curr = this.head;
            let prev = this.head;
            let counter = 0;
            while (counter !== at) {
                counter++;
                prev = curr;
                curr = curr.next;
            }
            const payload = new Node_1.default({
                value,
                next: curr,
            });
            prev.next = payload;
        }
    }
    insertHead(value) {
        let curr = this.head;
        const payload = new Node_1.default({
            value,
            next: curr,
        });
        this.head = payload;
    }
    remove(value) {
        if (value === this.head.value) {
            this.removeHead();
            return;
        }
        let curr = this.head;
        let prev = this.head;
        let currValue = curr.value;
        while (currValue !== value) {
            prev = curr;
            curr = curr.next;
            currValue = curr.value;
        }
        prev.next = curr.next;
    }
    removeAt(at) {
        if (at === 0) {
            this.removeHead();
            return;
        }
        let curr = this.head;
        let prev = this.head;
        let counter = 0;
        while (counter !== at) {
            counter++;
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
    }
    removeHead() {
        let curr = this.head;
        this.head = curr.next;
    }
    removeTail() {
        let curr = this.head;
        let prev = this.head;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
    }
    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
    getAt(at) {
        let curr = this.head;
        let counter = 0;
        while (counter !== at) {
            counter++;
            curr = curr.next;
        }
        console.log(curr.value);
    }
}
exports.LinkedList = LinkedList;
exports.default = LinkedList;
