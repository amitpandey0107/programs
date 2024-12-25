// Input:  = [1,2,3,2,4,4,3]
// Output: [1]

// Input:  = [1, 2, 3, 2, 4, 4, 3, 7, 8]
// Output: [1, 7, 8]

let arr = [1, 2, 3, 2, 4, 4, 3, 7, 8];
function uniqueArr(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        for (j = 0; j < arr.length; j++) {
            if (i == j) {
                continue
            }
            if (arr[i] === arr[j]) {
                break;
            }
        }
        if (j === arr.length) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

console.log(uniqueArr(arr))