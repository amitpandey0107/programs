let n = 10;
function fabonacciWithRecursion(n){
    if(n<=1){
        return n
    }
    return fabonacciWithRecursion(n-1) + fabonacciWithRecursion(n-2)
}

for(let i=0;i<=n;i++){
    console.log(fabonacciWithRecursion(i))
}