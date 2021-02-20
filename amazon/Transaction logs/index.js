const main = (logs, threshold) => {
    const transactionsByUserId = {};

    for (let i = 0; i < logs.length; ++i) {
        const [senderUserId, recipientUresId, amount] = logs[i].split(' ');

        if (transactionsByUserId[senderUserId] === undefined) {
            transactionsByUserId[senderUserId] = 0;
        }
        transactionsByUserId[senderUserId] += 1;

        if (senderUserId !== recipientUresId) {
            if (transactionsByUserId[recipientUresId] === undefined) {
                transactionsByUserId[recipientUresId] = 0;
            }
            transactionsByUserId[recipientUresId] += 1;   
        }
    }

    const res = [];

    for (let userId in transactionsByUserId) {
        if (transactionsByUserId[userId] >= threshold) {
            res.push(parseInt(userId));
        }
    }

    res.sort((a, b) => a - b);

    return res;
}

console.log(main(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2))
console.log(main(['345366 89921 45',
'029323 38239 23',
'38239 345366 15',
'029323 38239 77',
'345366 38239 23',
'029323 345366 13',
'38239 38239 23'], 3))
