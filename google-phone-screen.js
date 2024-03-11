/**
GIVEN INPUT:
* Set of items. Each item is associated with a weight of either 1 or 2, and a value - an arbitrary positive value.
* Total capacity C.
DESIRED OUTPUT:
* Subset of items from input so that
  * total weight does not exceed capacity C.
  * total value of selected items is maximized.

Questions to ask: 
	* what is the max length of the array?
	* what is the max capacity?
	
Example: [[1, 10], [2, 5], [1, 7], [2, 6]] 4  

Brutforce: Try every possible subset, we either take an item or not: O(2^n)
			[]
		[]              [1, 10]
    []  [2, 5]    [1, 10]    [1, 10], [2, 5] 

[]  [2, 5]   [1, 7]    [2, 5],[1, 7]     [1, 10],[1, 7]  [1,10],[2,5],  [1, 7]


ALGO THAT DIDN'T WORK:
Taking advantage of the fact that we have only two possible weights - 1 or 2

* split the list into two groups by weight 1 and 2
* sort both by value
* pick two items from the top of the first group and one from the second
* compare which is more efficient to take in terms of value - two from the first goup or one from the second

[2, 11] [1, 7] [1, 3]  limit 2
 5.5     7       3

[1, 7] [2, 11] [1, 3]

[2, 11] [1, 7] [1, 5]  limit 2


Time: O(n * log(n))
Space: O(n)

 */

const selectMaxCapacityBrut = (arr, target) => {
	// const memo = new Array(arr.length).fill(0).map(() => new Array(target + 1));

	const helper = (i, curSubset, curWeight, curValue) => {
		if (i === arr.length || curWeight === target) {
			return [curSubset, curValue];
		}

		// if (memo[i][curWeight]) return memo[i][curWeight];
		
		let res1 = [curSubset, curValue];

		if (curWeight + arr[i][0] <= target) {
			res1 = helper(i + 1, [...curSubset, arr[i]], curWeight + arr[i][0], curValue + arr[i][1]); // take an item
		}
		const res2 = helper(i + 1, [...curSubset], curWeight, curValue); // not taking an item

		return res1[1] > res2[1] ? res1 : res2; // return the res with max value

		// return memo[i][curWeight];
	};

	return helper(0, [], 0, 0)[0]; // return the subset
}

const Heap = require('./data structures/Heap');

const selectMaxCapacityHeap = (items, weightLimit) => {
	// Check for invalid arguments
	if (!items || !weightLimit) {
		throw new Error('Invalid arguments');
	}
	if (items.length === 0 || weightLimit === 0) {
		return [];
	}

	// Use a priority queue to efficiently select items
	const maxHeapOne = new Heap((a, b) => a[1] < b[1]); // Prioritize by value, max on the top
	const maxHeapTwo = new Heap((a, b) => a[1] < b[1]); // Prioritize by value, max on the top

	// split the items into two groups by weight: 1 or 2
	for (const item of items) {
		if (item[0] === 1) {
			maxHeapOne.insert(item);
		} else if (item[0] === 2) {
			maxHeapTwo.insert(item);
		}
	}

	if (weightLimit === 1) {
		return maxHeapOne.size() ? [maxHeapOne.delTop()] : [];
	}

	const minHeapResult = new Heap((a, b) => a[1] > b[1]); // Prioritize by value, min on the top
	let currentWeight = 0;

	// add 2's to the result min heap
	while (currentWeight + 1 < weightLimit && maxHeapTwo.size()) {
		minHeapResult.insert(maxHeapTwo.delTop());
		currentWeight += 2;
	}

	// add 1's to the result min heap
	while (currentWeight < weightLimit && maxHeapOne.size()) {
		minHeapResult.insert(maxHeapOne.delTop());
		currentWeight += 1;
	}

	// try to replace 2's with 1's if they bring more value
	while (maxHeapOne.size()) {
		const resItem = minHeapResult.delTop();
		const curItem1 = maxHeapOne.delTop();
		const curItem2 = maxHeapOne.delTop(); // can be empty
		const curValue = curItem2 ? curItem1[1] + curItem2[1] : curItem1[1];

		if (resItem[1] < curValue) {
			minHeapResult.insert(curItem1);
			
			if (curItem2) {
				minHeapResult.insert(curItem2);
			}
		} else {
			// 1's don't bring more value any longer, so break the loop
			minHeapResult.insert(resItem);
			break;
		}
	}

	const result = [];
	while (minHeapResult.size()) result.push(minHeapResult.delTop());
	return result;
};


test_items_1 = [[1, 10], [1, 2], [2, 5], [2, 11], [1, 7], [1, 6], [1, 3]];
test_capacity_1 = 6

test_items_2 = [[1, 10], [1, 2], [1, 5], [1, 11], [1, 7], [1, 6], [1, 3]];
test_capacity_2 = 6

test_items_3 = [[1, 10], [1, 2], [2, 5], [2, 11], [2, 7], [2, 6], [2, 3]];
test_capacity_3 = 5

test_items_4 = [[2, 11], [1, 7], [1, 3]]
test_capacity_4 = 2

test_items_5 = [[2, 11], [1, 7], [1, 5]] 
test_capacity_5 = 2


const count_value = (res) => res.reduce((cur, next) => cur + next[1], 0);


console.time('brut');
(() => {
	const minHeapResult_1 = selectMaxCapacityBrut(test_items_1, test_capacity_1);
	console.log(minHeapResult_1, count_value(minHeapResult_1))
	
	const minHeapResult_2 = selectMaxCapacityBrut(test_items_2, test_capacity_2);
	console.log(minHeapResult_2, count_value(minHeapResult_2))
	
	const minHeapResult_3 = selectMaxCapacityBrut(test_items_3, test_capacity_3);
	console.log(minHeapResult_3, count_value(minHeapResult_3))

	const minHeapResult_4 = selectMaxCapacityBrut(test_items_4, test_capacity_4);
	console.log(minHeapResult_4, count_value(minHeapResult_4))

	const minHeapResult_5 = selectMaxCapacityBrut(test_items_5, test_capacity_5);
	console.log(minHeapResult_5, count_value(minHeapResult_5))
})()
console.timeEnd('brut');


console.time('heap');
(() => {
	const minHeapResult_1 = selectMaxCapacityHeap(test_items_1, test_capacity_1);
	console.log(minHeapResult_1, count_value(minHeapResult_1))
	
	const minHeapResult_2 = selectMaxCapacityHeap(test_items_2, test_capacity_2);
	console.log(minHeapResult_2, count_value(minHeapResult_2))
	
	const minHeapResult_3 = selectMaxCapacityHeap(test_items_3, test_capacity_3);
	console.log(minHeapResult_3, count_value(minHeapResult_3))

	const minHeapResult_4 = selectMaxCapacityHeap(test_items_4, test_capacity_4);
	console.log(minHeapResult_4, count_value(minHeapResult_4))

	const minHeapResult_5 = selectMaxCapacityHeap(test_items_5, test_capacity_5);
	console.log(minHeapResult_5, count_value(minHeapResult_5))
})()
console.timeEnd('heap');