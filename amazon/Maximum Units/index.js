const main = (num, boxes, unitSize, unitsPerBoxes, trackSize) => {
    const boxesWithUnits = new Array(unitSize);

    for (let i = 0; i < unitSize; ++i) {
        boxesWithUnits[i] = {
            boxes: boxes[i],
            units: unitsPerBoxes[i]
        }
    }

    boxesWithUnits.sort((a, b) => b.units - a.units);

    let j = 0;
    let maxUnits = 0;

    for (let i = 0; i < trackSize && j < boxesWithUnits.length; ++i) {
        if (boxesWithUnits[j].boxes !== 0) {
            maxUnits += boxesWithUnits[j].units;
            boxesWithUnits[j].boxes -= 1;
        }

        if (boxesWithUnits[j].boxes === 0) {
            ++j;
        }
    }

    return maxUnits;
}

// Time: O(n * log(n))
// Space: O(n)
console.log(main(3, [1,2,3], 3, [3,2,1], 3))
console.log(main(3, [1,2,3], 3, [3,2,1], 4))
console.log(main(3, [2,5,3], 3, [3,2,1], 50))