import INode from "./interfaces/Inode";
import type Link from "./types/Link";

import Node from "./Node";

export class LinkedList {
	head: Link;

	constructor() {
		this.head = null;
	}

	insert(value: number) {
		if (!this.head) {
			const payload: INode = new Node({ value, next: null });
			this.head = payload;
		} else {
			let curr: INode = this.head;

			while (curr.next) {
				curr = curr.next as INode;
			}

			const payload = new Node({
				value,
				next: null,
			});

			curr.next = payload;
		}
	}

	insertAt(at: number, value: number) {
		if (at === 0) {
			this.insertHead(value);
		} else {
			let curr: INode = this.head!;
			let prev: INode = this.head!;
			let counter: number = 0;

			while (counter !== at) {
				counter++;
				prev = curr;
				curr = curr.next as INode;
			}

			const payload = new Node({
				value,
				next: curr,
			});

			prev.next = payload;
		}
	}

	insertHead(value: number) {
		let curr: INode = this.head!;
		const payload = new Node({
			value,
			next: curr,
		});

		this.head = payload;
	}

	remove(value: number) {
		if (value === this.head!.value) {
			this.removeHead();

			return;
		}

		let curr: INode = this.head!;
		let prev: INode = this.head!;

		let currValue: number = curr.value;

		while (currValue !== value) {
			prev = curr;
			curr = curr.next as INode;
			currValue = curr.value;
		}

		prev.next = curr.next;
	}

	removeAt(at: number) {
		if (at === 0) {
			this.removeHead();

			return;
		}

		let curr: INode = this.head!;
		let prev: INode = this.head!;
		let counter: number = 0;

		while (counter !== at) {
			counter++;
			prev = curr;
			curr = curr.next as INode;
		}

		prev.next = curr.next;
	}

	removeHead() {
		let curr: INode = this.head!;
		this.head = curr.next;
	}

	removeTail() {
		let curr: INode = this.head!;
		let prev: INode = this.head!;

		while (curr.next) {
			prev = curr;
			curr = curr.next;
		}

		prev.next = null;
	}

	print() {
		let curr: INode = this.head!;

		while (curr) {
			console.log(curr.value);
			curr = curr.next as INode;
		}
	}

	getAt(at: number) {
		let curr: INode = this.head!;
		let counter: number = 0;

		while (counter !== at) {
			counter++;
			curr = curr.next!;
		}

		console.log(curr.value);
	}
}

export default LinkedList;
