process.stdin.resume();
process.stdin.setEncoding('utf-8');

const fs = require("fs");
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the below class
class CustomStorage {
    constructor() {
        this.storage = {}
    }

    set(key, value) {
        this.storage[key] = value;
    }

    get(key) {
        return this.storage.hasOwnProperty(key) ? this.storage[key] : null;
    }

    remove(key) {
        if (this.storage.hasOwnProperty(key) && this.storage[key] !== "") {
            let res = delete this.storage[key]
            if (res) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    clear() {
        this.storage = {}
    }


    getAllKeys() {
        return Object.keys(this.storage)
    }

}

async function main() {
    const ws = fs.createWriteStream(process.env['OUTPUT_PATH']);
    const [n, ...ops] = inputString;

    let content = ''
    const customStorage = new CustomStorage()
    for (let i = 0; i < parseInt(n); i++) {
        const {
            type,
            key,
            value
        } = JSON.parse(ops[i]);
        switch (type) {
            case "get":
                content += await customStorage.get(key) + '\n';
                break;
            case "set":
                await customStorage.set(key, value)
                break;
            case "remove":
                content += await customStorage.remove(key) + '\n';
                break;
            case "clear":
                await customStorage.clear();
                break;
            case "getAllKeys":
                content += JSON.stringify(await customStorage.getAllKeys()) + "\n";
                break;
            default:
                content += 'Invalid type given'
        }
    }

    ws.write(content);
    ws.end();
}