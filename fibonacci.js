var fibo=[0, 1];
for(var i=2; i<=10; i++)
{
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);

//function diye fibonacci

function fibonacci(n)
{
    var fibo=[0, 1];
    for(var i=2; i<=n; i++)
    {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;                                 
}
var fibonacciNumber=fibonacci(10);
console.log(fibonacciNumber);
