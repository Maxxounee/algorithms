import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bubbleSort } from './bubbleSort.ts';

test('sorts numbers', () => {
	assert.deepEqual(bubbleSort([3, 1, 2]), [1, 2, 3]);
	assert.deepEqual(bubbleSort([12]), [12]);
	assert.deepEqual(bubbleSort([-1, -2, -3]), [-3, -2, -1]);
	assert.deepEqual(bubbleSort([1, 2, 3]), [1, 2, 3]);
});

