/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    const result = new Array(cells.length);
    const map = {};
    let forwarded = false;
    result.fill(0);

    while (N > 0) {
        const key = cells.join('#');

        if (map[key] && !forwarded) {
            N %= map[key] - N;
            forwarded = true;
            continue;
        }
        
        map[key] = N;

        for (let j = 1; j < cells.length - 1; ++j) {
            result[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
        }
        
        for (let k = 0; k < result.length; ++k) {
            cells[k] = result[k];
        }
        --N;
    }
    
    return result;
};