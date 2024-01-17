/**
GIVEN INPUT:
* Set of items. Each item is associated with a weight of either 1 or 2 and a value - an arbitrary positive value.
* Total capacity C.
DESIRED OUTPUT:
* Subset of items from input so that
  * total weight does not exceed capacity C.
  * total value of selected items is maximized.
								                 ^           ^
[[1, 10], [2, 5], [1, 7], [2, 6]] 4  [[1, 10], [1, 7]],  [[2,6], [2,5]]

4
16

[[1, 10], [2, 5], [2, 7], [1, 10]] 5

2
17
			[]
		[]              [1, 10]
    []  [2, 5]    [1, 10]    [1, 10], [2, 5] 

[]  [2, 5]   [1, 7]    [2, 5],[1, 7]     [1, 10],[1, 7]  [1,10],[2,5],  [1, 7]


ALGO:
* split the list into two groups by weight 1 and 2
* sort both by value
* pick two items from the top of the first group and one from the second
* compare which is more efficient to take

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

const selectMaxCapacity = (items, limit) => {
	if (items === undefined || limit === undefined) {
      	throw new Error('Invalid argument');
    }
  	if (items.length === 0 || limit === 0) {
    	return [];
    }
  
  	items.sort((a, b) => a[1] - b[1]);
  
	const [fistGroup, secondGroup] = getGoupsByWeight(items); // [[[1,7], [1,10]], [[2,5], [2,6]]]]
  	const resultSubset = []; 
    let currentValue = 0;

	while (currentValue < limit) {
		const pairOne = fistGroup.length ? fistGroup[fistGroup.length - 1] : null;
		const pairTwo = fistGroup.length > 1 ? fistGroup[fistGroup.length - 2] : null;;
		const pairThree = secondGroup.length ? secondGroup[secondGroup.length - 1] : null;

		if (currentValue + 1 === limit) {
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
			currentValue += 2;
		} else if (pairOne && pairTwo) {
			resultSubset.push(fistGroup.pop());
			currentValue += 1;
		} else if (pairOne && pairThree) {
			if (pairOne[1] > pairThree[1]) {
				resultSubset.push(fistGroup.pop());
				currentValue += 1;
			} else {
				resultSubset.push(secondGroup.pop())
				currentValue += 2;
			}
		} else if (pairOne) {
			resultSubset.push(fistGroup.pop());
			currentValue += 1;
		} else if (pairThree) {
			resultSubset.push(secondGroup.pop());
			currentValue += 2;
		}
	}

	return resultSubset;
}

console.log(selectMaxCapacity([[1, 10], [1, 2], [2, 5], [2, 11], [1, 7], [2, 6]], 3 ))