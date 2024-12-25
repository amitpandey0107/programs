'use strict'

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

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

/*
* Complete the 'Vector' class below
*/
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    fromHashAdd(otherVec) {
        return new Vector(this.x + otherVec.x, this.y + otherVec.y)
    }

    fromHashSubstract(otherVec) {
        return new Vector(this.x - otherVec.x, this.y - otherVec.y)
    }

    fromHashMultiply(otherVec) {
        if (typeof otherVec === 'number') {
            return new Vector(this.x * otherVec, this.y * otherVec);
        } else if (otherVec instanceof Vector) {
            return new Vector(this.x * otherVec.x, this.y * otherVec.y);
        } else {
            return new Vector(this.x, this.y);
        }
    }

    fromHashDevide(otherVec) {
        return otherVec != 0 ? new Vector(this.x / otherVec, this.y / otherVec)
            : new Vector(this.x, this.y);
    }
}

function get_result(x, y, arr) {

    let result = [];

    let obj = new Vector(x, y);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][0] === 1) {
            let vec = new Vector(arr[i][1], arr[i][2]);
            obj = obj.fromHashAdd(vec);
        }
        if (arr[i][0] === 2) {
            let vec = new Vector(arr[i][1], arr[i][2]);
            obj = obj.fromHashSubtract(vec);
        }
        if (arr[i][0] === 3) {
            obj = obj.fromHashMultiply(arr[i][1]);
        }
        if (arr[i][0] === 4) {
            obj = obj.fromHashDevide(arr[i][1]);
        }

        result.push([obj.x, obj.y]);

    }
    return result;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const x = parseInt(readLine().trim(), 10);

    const y = parseInt(readLine().trim(), 10);

    const arrRows = parseInt(readLine().trim(), 10);

    let arr = Array(arrRows);

    for (let i = 0; i < arrRows; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp =>
            parseInt(arrTemp, 10));
    }

    const result = get_result(x, y, arr);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
