/**GIVEN INPUT:
* Set of items. Each item is associated with a weight of either 1 or 2 and an arbitrary positive value.
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

 */
const selectMaxCapacity = (items, limit) => {
	if (items === undefined || limit === undefined) {
      	throw new Error('Invalid argument');
    }
  
  	if (items.length === 0 || limit === 0) {
    	return 0;
    }
  
  	items.sort((a, b) => {
    	if (a[0] < b[0]) {
          return -1;
        }
        if (a[0] > b[0]) {
          return 1;
        }
      	return b[1] - a[1];
    });
  
  	const groupsByWeight = getGoupsByWeight(items); // [[[1,10], [1,7]], [[2,6], [2,5]]]]
  	const resultSubset = []; 
  	let weight = 0;
    let value = 0;
  
  	for (let i = 0; i < groupsByWeight.length - 1; ++i) {
    	const first = groupsByWeight[i];
        const second = groupsByWeight[i + 1];
 		
      	// weight += 
    }
}