"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor({ next, value }) {
        this.next = next;
        this.value = value;
    }
}
exports.Node = Node;
exports.default = Node;
