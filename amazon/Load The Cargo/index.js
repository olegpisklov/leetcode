var maximumItems = function(num, containers, itemSize, itemsPerContainer, cargoSize) {
    const pairs = new Array(num);

    for (let i = 0; i < num; ++i) {
        pairs[i] = [containers[i], itemsPerContainer[i]];
    }

    pairs.sort((a, b) => b[1] - a[1]);
    
    let items = 0;
    let curContainers = 0;
    
    for (let i = 0; i < pairs.length; ++i) {
        const [numberOfContainers, numberOfItems] = pairs[i];
        
        if (curContainers + numberOfContainers <= cargoSize) {
            curContainers += numberOfContainers;
            items += numberOfItems * numberOfContainers;
        } else {
            const diff = cargoSize - curContainers;
            items += diff * numberOfItems;
            break;
        }
    }
    
    return items;
};

console.log(maximumItems(3, [3, 1, 2], 3, [1, 2, 3], 4));

