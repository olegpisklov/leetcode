class Transaction {
    constructor(transaction) {
        const arr = transaction.split(',');
        
        this.raw = transaction;
        this.name = arr[0];
        this.time = parseInt(arr[1]);
        this.amount = parseInt(arr[2]);
        this.city = arr[3];
    }
}

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const info = transactions.map(transaction => new Transaction(transaction)); // O(N * T)
    const invalid = new Set();

    info.sort((tr1, tr2) => { // O(N * log(N))
        if (tr1.name < tr2.name) {
            return -1;
        }
        if (tr1.name > tr2.name) {
            return 1;
        }
        return tr1.time - tr2.time;
    });
    
    for (let i = 0; i < info.length; ++i) { // O(N * 60) -> O(N)
        if (info[i].amount > 1000) {
            invalid.add(info[i].raw);
        }

        let j = i + 1;
        
        while (j < info.length &&
               info[j].time - info[i].time <= 60 &&
               info[i].name === info[j].name) {
                        
            if (info[i].city !== info[j].city) {
                invalid.add(info[i].raw);
                invalid.add(info[j].raw);
            }
            
            ++j;
        }
    }

    return Array.from(invalid); // O(N)
};


/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactionsBruntForce = function(transactions) {
    const tr = transactions.map(tran => tran.split(','));
    const res = [];

    for (let i = 0; i < tr.length; ++i) {        
        if (parseInt(tr[i][2]) > 1000) {
            res.push(transactions[i]);
            continue;
        }
        
        for (let j = 0; j < tr.length; ++j) {
            if (i === j) continue;
            
            if (Math.abs(parseInt(tr[i][1]) - parseInt(tr[j][1])) <= 60 && 
                tr[i][3] !== tr[j][3] && 
                tr[i][0] === tr[j][0]) {
                
                res.push(transactions[i]);
                break;
            }
        }
    }

    return res;
};
