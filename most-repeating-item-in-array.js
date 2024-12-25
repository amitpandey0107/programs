const arr = [1, 1, 1, 1, 3, 3, 3, 4, 5, 6, 6, 7, 5, 4, 3, 2, 2, 3, 4, 5, 5, 7];
function mostRepeatingItemInArray(arr) {
    let res = {};
    let max = 0;
    let item = 0;
    for (i in arr) {
        // res[arr[i]] = (res[arr[i]] || 0) + 1;
        if (res[arr[i]]) {
            ++res[arr[i]]
        } else {
            res[arr[i]] = 1
        }
        if (res[arr[i]] > max) {
            max = res[arr[i]];
            item = arr[i]
        }
    }
    console.log("Item " + item + " is repeating " + max + " times")
}
mostRepeatingItemInArray(arr)

// Method -2 
// Show all item with their frequency of repeatation in object
function count(arr) {
    let counter = {};
    arr.forEach(item=>{
        if(counter[item]) {
            counter[item] +=1
        } else {
            counter[item] = 1
        }
    })
    return counter
}
console.log(count(arr))