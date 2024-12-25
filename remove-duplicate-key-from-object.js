const employee = [
    { "id": 10, "name": "A" },
    { "id": 20, "name": "B" },
    { "id": 30, "name": "C" },
    { "id": 10, "name": "G" },
    { "id": 40, "name": "D" },
    { "id": 50, "name": "E" },
    { "id": 10, "name": "F" },
]

function removeDuplicateKey(arr) {
    arr.sort((a, b)=>a.id - b.id);
    const ids = arr.map((item)=>item.id);
    const filtered = arr.filter((item, index)=>{
        if(!ids.includes(item.id, index+1)) {
            return item
        }
    })
    return filtered;
}
console.log(removeDuplicateKey(employee))



// Method - 2
function removeItems(arr){
    for(let i=0;i<arr.length;++i) {
        for(let j=0;j<arr.length;++j) {
            if(i!==j && arr[i].id===arr[j].id) {
                arr.splice(j, 1)
            }
        }
    }
    return arr;
}

console.log(removeItems(employee))