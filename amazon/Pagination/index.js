// O(n * log(n))
const main = (numberOfItems, items, sortParameter, sortOrder, itemsPerPage, pageNumber) => {
    items.sort((a, b) => {
        if (sortParameter === 0) {
            if (sortOrder === 0) {
                return a[0] < b[0] ? -1 : 1
            } else {
                return b[0] < a[0] ? -1 : 1;
            }
        }

        if (sortOrder === 0) {
            return a[sortParameter] - b[sortParameter];
        }
        return b[sortParameter] - a[sortParameter];
    })

    const result = [];

    for (let i = itemsPerPage * pageNumber; i < itemsPerPage * pageNumber + itemsPerPage && i < numberOfItems; ++i) {
        result.push(items[i]);
    }

    return result;
}

// O(n * log(k)) with heap
const main2 = () => {

}

console.log(main(3, [['item1', 10, 15], ['item2', 3, 4], ['item3', 18, 8]], 1, 0, 2, 1));