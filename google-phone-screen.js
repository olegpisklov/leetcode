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


ALGO:
Taking advantage of the fact that we have only two possible weights - 1 or 2

* split the list into two groups by weight 1 and 2
* sort both by value
* pick two items from the top of the first group and one from the second
* compare which is more efficient to take in terms of value - two from the first goup or one from the second

Time: O(n * log(n))
Space: O(n)
 */

const getGoupsByWeight = (items) => {
	const first = [];
	const second = [];

	for (let i = 0; i < items.length; ++i) {
		if (items[i][0] === 1) {
			first.push(items[i])
		} else {
			second.push(items[i])
		}
	}

	return [first, second];
}

const selectMaxCapacity = (items, weightLimit) => {
	if (items === undefined || weightLimit === undefined) {
      	throw new Error('Invalid argument');
    }
  	if (items.length === 0 || weightLimit === 0) {
    	return [];
    }
  
	// sort by value
  	items.sort((a, b) => a[1] - b[1]);
  
	const [fistGroup, secondGroup] = getGoupsByWeight(items); // [[[1,7], [1,10]], [[2,5], [2,6]]]]
  	const resultSubset = []; 
    let currentWeight = 0;

	while (currentWeight < weightLimit && (fistGroup.length || secondGroup.length)) {
		const pairOne = fistGroup.length ? fistGroup[fistGroup.length - 1] : null;
		const pairTwo = fistGroup.length > 1 ? fistGroup[fistGroup.length - 2] : null;;
		const pairThree = secondGroup.length ? secondGroup[secondGroup.length - 1] : null;

		if (currentWeight + 1 === weightLimit) {
			if (pairOne) resultSubset.push(fistGroup.pop());
			return resultSubset;
		}

		if (pairOne && pairTwo && pairThree) {
			if (pairOne[1] + pairTwo[1] > pairThree[1]) {
				resultSubset.push(fistGroup.pop());
				resultSubset.push(fistGroup.pop());
			} else {
				resultSubset.push(secondGroup.pop());
			}
			currentWeight += 2;
		} else if (pairOne && pairTwo) {
			resultSubset.push(fistGroup.pop());
			currentWeight += 1;
		} else if (pairOne && pairThree) {
			if (pairOne[1] > pairThree[1]) {
				resultSubset.push(fistGroup.pop());
				currentWeight += 1;
			} else {
				resultSubset.push(secondGroup.pop())
				currentWeight += 2;
			}
		} else if (pairOne) {
			resultSubset.push(fistGroup.pop());
			currentWeight += 1;
		} else if (pairThree) {
			resultSubset.push(secondGroup.pop());
			currentWeight += 2;
		}
	}

	return resultSubset;
}

const selectMaxCapacityBrut = (arr, target) => {
	let maxValue = 0;
	let resultSubset = [];

	const helper = (i, curRes, curWeight, curValue) => {
		if (i === arr.length || curWeight > target) return;
		
		if (maxValue < curValue) {
			resultSubset = curRes;
			maxValue = curValue;
		}

		helper(i + 1, [...curRes, arr[i]], curWeight + arr[i][0], curValue + arr[i][1]); // take an item
		helper(i + 1, [...curRes], curWeight, curValue); // not taking an item
	}

	helper(0, [], 0, 0);

	return resultSubset;
}


console.time('sort');
console.log(selectMaxCapacity([[1, 10], [1, 2], [2, 5], [2, 11], [1, 7], [2, 6]], 5 ))
console.timeEnd('sort');

console.time('brut');
console.log(selectMaxCapacityBrut([[1, 10], [1, 2], [2, 5], [2, 11], [1, 7], [2, 6]], 5 ));
console.timeEnd('brut');