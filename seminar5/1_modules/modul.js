const Fibonacci = (n) => {
    if(n==0 || n==1) return n;
    let a=0, b=1, c, i=2;
    while(i<=n){
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    return c;
}

export { Fibonacci}