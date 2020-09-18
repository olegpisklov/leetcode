/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    const usersMap = {}; // joe: [{name: 'home', time: 1}]
    
    for (let i = 0; i < username.length; ++i) {
        if (usersMap[username[i]] !== undefined) {
            usersMap[username[i]].push({name: website[i], time: timestamp[i]});
        } else {
            usersMap[username[i]] = [{name: website[i], time: timestamp[i]}];
        }
    }
    
    const sequnces = {}; // home#about#maps: {count: 0, users: {}}
    const userKeys = Object.keys(usersMap);
    
    for (let i = 0; i < userKeys.length; ++i) {
        const username = userKeys[i];
        const websites = usersMap[username];
        
        websites.sort((a, b) => a.time - b.time);
        
        if (websites.length < 3) {
            continue;
        }
        
        for (let j = 0; j < websites.length - 2; ++j) {
            for (let k = j + 1; k < websites.length - 1; ++k) {
                for (let l = k + 1; l < websites.length; ++l) {
                    const sequenceKey = websites[j].name + '#' + websites[k].name + '#' + websites[l].name;
                    
                    if (sequnces[sequenceKey] !== undefined && sequnces[sequenceKey].users[username] === undefined) {
                        sequnces[sequenceKey].count += 1;
                        sequnces[sequenceKey].users[username] = true;
                    } else {
                        sequnces[sequenceKey] = {
                            count: 1,
                            users: {
                                [username]: true
                            }
                        }
                    }
                }
            }    
        }
    }

    const sequncesByCount = [];
    const sequenceKeys = Object.keys(sequnces);
    
    for (let i = 0; i < sequenceKeys.length; ++i) {
        const key = sequenceKeys[i];
        sequncesByCount.push({count: sequnces[key].count, key});
    }
    
    sequncesByCount.sort((a, b) => a.count - b.count);
    
    const maxKeys = [];
    const maxCount = sequncesByCount[sequncesByCount.length - 1].count;
    
    for (let i = sequncesByCount.length - 1; i >= 0; --i) {
        if (sequncesByCount[i].count < maxCount) {
            break;
        } else {
            maxKeys.push(sequncesByCount[i].key);
        }
    }
    
    maxKeys.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    return maxKeys[0].split('#');
};