/**
 var num=10;
var fact=1;
for(var i=1;i<=num;i++)       //  for loop diye factorial
{
    fact=fact*i;
    console.log(i, fact);

}
 */

 //Function diye factorial using foor loop inside of function

/**function factorial(num)  
{
    var fact=1;
    for(var i=1; i<=num; i++)
    {
         fact=fact*i;

                                         
    }
    return fact;
}
var factorialNum=factorial(5);
console.log(factorialNum);

 */

 //function diye factorial 

 /**var num=5;
 var i=1;
 var fact=1;
 while(i<=num)
 {
    fact=fact*i;
    i++;
 }
console.log(fact); */

//function diye factorial inside a  while loop diye factorial 
function factorial(num)
{
    var i=1;
    var fact=1;
    while(i<=num)
    {
        fact=fact*i;
        i++;
    }
    return fact;
}
var factNum=factorial(5);
console.log(factNum);