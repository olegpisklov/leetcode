const main = (averageUtil, instances) => {
    if (averageUtil === null || averageUtil.length === 0 || instances === 0) return 0;

    const maxInstancesNumber = 2 * (10**8);

    for (let i = 0; i < averageUtil.length; ++i) {
        if (averageUtil[i] < 25 && instances > 1) {
            instances = Math.ceil(instances / 2);
            i += 10;
        } else if (averageUtil[i] > 60 && instances < maxInstancesNumber / 2) {
            instances *= 2;
            i += 10;
        }
    }

    return instances;
}

console.log(main([ 5, 10, 80], 1))
console.log(main([25, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 76, 80], 2)) 
console.log(main([30, 5, 4, 8, 19, 89], 5))