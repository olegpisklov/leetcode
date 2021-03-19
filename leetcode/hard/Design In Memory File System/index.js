const SYSTEM_KEYS = new Set(['isFolder'])

class FileSystem {
    constructor() {
        this.map = {
            isFolder: true
        };
    }

    ls(path) {
        if (path === '/') {
            return this.__lsList(this.map);
        }

        const pathArr = path.split('/');
        const node = this.__readPath(pathArr);

        if (node === null) {
            return null;
        }
        if (!node.isFolder) {
            return pathArr.pop();
        }

        return __lsList(node);
    }

    mkdir(path) {
        const pathArr = path.split('/');
        this.__createPath(pathArr);
    }

    addContentToFile(path, content) {
        const pathArr = path.split('/');
        const fileName = pathArr.pop();
        const node = this.__createPath(pathArr);
     
        if (node[fileName] === undefined) {
            node[fileName] = {
                content,
                isFolder: false
            }
        } else {
            node[fileName].content += content;
        }
    }

    readContentFromFile(path) {
        const pathArr = path.split('/');
        const node = this.__readPath(pathArr);

        if (!node.isFolder) {
            return node.content;
        }

        return null;
    }

    __lsList(node) {
        return Object.keys(node)
            .filter(key => !SYSTEM_KEYS.has(key))
            .sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
            });
    }

    __createPath(pathArr) {
        let cur = this.map;

        for (let i = 1; i < pathArr.length; ++i) {
            const folder = pathArr[i];

            if (cur[folder] === undefined) {
                cur[folder] = {
                    isFolder: true
                };
            }

            cur = cur[folder];
        }

        return cur;
    }

    __readPath(pathArr) {
        let cur = this.map;

        for (let i = 1; i < pathArr.length; ++i) {
            const folder = pathArr[i];
            
            if (cur[folder] === undefined) {
                return null;
            }

            cur = cur[folder];
        }

        return cur;
    }
}

// ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
// [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

// tr = {
//     a: {
//         b: {
//             c: {
//                 d: {
//                     content : 'hello',
//                     isFolder: 0,    
//                 },
//                 isFolder: 1,
//             },
//             isFolder: 1
//         },
//         isFolder: 1
//     }
// }

const fs = new FileSystem();

console.log(fs.ls('/'));
console.log(fs.mkdir('/a/b/c'));
console.log(fs.addContentToFile('/a/b/c/d', 'hello'));
console.log(fs.ls('/'));
console.log(fs.readContentFromFile('/a/b/c/d'));

// console.log(JSON.stringify(fs.map, null, 2))

