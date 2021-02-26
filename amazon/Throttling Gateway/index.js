const droppedRequest = (requestTime) => {
    let dropped = 0;

    for (let i = 0; i < requestTime.length; ++i) {
       if (i > 2 && requestTime[i] === requestTime[i - 3]) {
           ++dropped;
       } else if (i > 19 && requestTime[i] < requestTime[i - 20] + 10) {
           ++dropped;
       } else if (i > 59 && requestTime[i] < requestTime[i - 60] + 60) {
           ++dropped;
       }
    }

    return dropped;
}

console.log(droppedRequest([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11]));
console.log(droppedRequest([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7]));