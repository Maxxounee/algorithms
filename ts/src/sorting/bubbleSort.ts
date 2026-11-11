import { logArray } from "../utils/utils.ts";

const mock = [8, 7, 6, 5, 4, 3, 2, 1];

export function bubbleSort(arr: number[]): number[] {

	for (let end = 0; end > 0; end--) {
		let swapped = false;

		for (let k = 0; k < end; k++) {
			if (arr[k] > arr[k + 1]) {
				[arr[k + 1], arr[k]] = [arr[k], arr[k + 1]];
				swapped = true;
			}
		}

		if (!swapped) break;
	}
	
	return arr;
}


// console.log(bubbleSort(mock));