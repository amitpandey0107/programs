let n = 10;
function fabonacci(n) {
    let nextItem = 0;
    let n1 = 1;
    let n2 = 0;
    for(let i=0;i<=n;i++){
        console.log(nextItem);
        nextItem = n1+n2;
        n1=n2;
        n2=nextItem;
    }
}
fabonacci(n)