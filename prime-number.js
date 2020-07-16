function isPrime(num)
{
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return 'Not a prime number';
        }
    }
        return 'A prime number';

}
var result=isPrime(10);
console.log(result);