var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
    
    hand.sort((a, b) => a - b);
    
    const countMap = {};
    
    for (let i = 0; i < hand.length; ++i) {
        if (countMap[hand[[i]]] !== undefined) {
            countMap[hand[[i]]] += 1;
        } else {
            countMap[hand[[i]]] = 1;
        }
    }
    
    let i = 0;
    
    while (i < hand.length) {
        const card = hand[i];
        
        if (countMap[card] === 0) {
            ++i;
            continue;
        }
                
        for (let j = 0; j < W; ++j) {
            if (countMap[card + j] > 0) {
                countMap[card + j] -= 1;
            } else {
                return false;
            }
        }
        
        ++i;
    }
    
    return true;
}
