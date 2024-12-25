let arr = [11, 22, 11, 33, 11, 44, 55, 66, 100];
// Method -1
function removeDuplicate(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(removeDuplicate(arr))

// Method -2 
function removeDuplicateItem(arr) {
    let res = arr.filter((item, index)=>{
        if(arr.indexOf(item)===index){
            return item
        }
    })
    console.log(res)
}
removeDuplicateItem(arr)