// Program to move all zeros to end of a numbered array
// input = [2,4,6,1,5,7,0,0,8,5]
// output = [2,4,6,1,5,7,8,5, 0, 0]

let arr = [2, 4, 6, 1, 5, 7, 0, 0, 8, 5];
function moveZeros(arr) {
    let newarr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}
console.log(moveZeros(arr))


// Method - 2
let arr2 = [2,4,6,1,5,7,0,0,8,5,0,8];
function moveZerosMethod2(arr){
    let nonzero = arr.filter((item)=>item!==0)
    let zeros = arr.filter((item)=>item===0)
    return [...nonzero, ...zeros]
}
console.log(moveZerosMethod2(arr2))