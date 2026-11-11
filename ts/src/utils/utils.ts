import { inspect } from "node:util";

export function logArray<T>(arr: T[]): void {
	console.log(inspect(arr, { breakLength: Infinity, compact: true, depth: null }));
}