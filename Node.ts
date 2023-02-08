import INode from "./interfaces/Inode";
import type Link from "./types/Link";

export class Node implements INode {
	next: Link;
	value: number;

	constructor({ next, value }: INode) {
		this.next = next as INode["next"];
		this.value = value as INode["value"];
	}
}

export default Node;
