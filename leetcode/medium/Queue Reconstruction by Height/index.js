/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // sort by height in desc order, by k in asc
    people.sort((a, b) => {
        if (a[0] > b[0]) {
            return -1;
        }
        if (a[0] < b[0]) {
            return 1;
        }
        return a[1] - b[1];
    });
    
	for (let i = 0; i < people.length; ++i) {
		const person = people[i];
        
		if (person[1] !== i) {
            movePerson(people, i);
        }
    }
    
    return people;
};

const movePerson = (arr, i) => {    
	while (i > 0 && arr[i][1] < i) {
		const prevPerson = arr[i - 1];
        
		arr[i - 1] = arr[i];
		arr[i] = prevPerson;
		--i;
    }
}
