/**
 * @param {string[][]} accounts
 * @return {string[][]}
 

[["John", "johnsmith@mail.com", "john00@mail.com"], 
 ["John", "johnnybravo@mail.com"], 
 ["John", "johnsmith@mail.com", "john_newyork@mail.com"], 
 ["Mary", "mary@mail.com"]]

"johnsmith@mail.com" -> "John"
"john00@mail.com" -> "John"
"johnnybravo@mail.com" -> "John"
"john_newyork@mail.com" -> "John"
"mary@mail.com" -> "Mary"

"johnsmith@mail.com" -> ["johnsmith@mail.com", "john00@mail.com", "john_newyork@mail.com"]
"john00@mail.com" -> ["john00@mail.com", "johnsmith@mail.com"]
"johnnybravo@mail.com" -> []
"john_newyork@mail.com" -> ["johnsmith@mail.com"]
"mary@mail.com" -> []

*/
var accountsMerge = function(accounts) {
    const emailsToName = {};
    const accountsGraph = {};
    
    for (let i = 0; i < accounts.length; ++i) {
        let name = accounts[i][0];
        const firstEmail = accounts[i][1];
        
        for (let j = 1; j < accounts[i].length; ++j) {
            const email = accounts[i][j];
            
            if (accountsGraph[email] !== undefined) {
                accountsGraph[email].push(firstEmail);
            } else {
                accountsGraph[email] = [firstEmail];
            }
            
            if (accountsGraph[firstEmail] !== undefined) {
                accountsGraph[firstEmail].push(email);
            } else {
                accountsGraph[firstEmail] = [email];
            }
            
            emailsToName[email] = name;
        }
    }
    
    const emails = Object.keys(accountsGraph);
    const visited = new Set();
    const result = [];
    
    for (let i = 0; i < emails.length; ++i) {
        const email = emails[i];
        
        if (visited.has(email)) {
            continue;
        }
        
        const account = [];
        const stack = [email];
        
        while (stack.length) {
            const node = stack.pop();
            
            if (!visited.has(node))            {
                account.push(node);
            }
            
            visited.add(node);
            
            for (let j = 0; j < accountsGraph[node].length; ++j) {
                const e = accountsGraph[node][j];

                if (!visited.has(e)) {
                    stack.push(e);
                }
            }
        }
        
        account.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        
        account.unshift(emailsToName[email]);
        result.push(account);
    }
    
    return result
};
