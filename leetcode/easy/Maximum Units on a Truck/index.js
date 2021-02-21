/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    let units = 0;
    let boxes = 0;
    
    for (let i = 0; i < boxTypes.length; ++i) {
        const [numberOfBoxes, numberOfUnits] = boxTypes[i];
        
        if (boxes + numberOfBoxes <= truckSize) {
            boxes += numberOfBoxes;
            units += numberOfUnits * numberOfBoxes;
        } else {
            const diff = truckSize - boxes;
            units += diff * numberOfUnits;
            break;
        }
    }
    
    return units;
};