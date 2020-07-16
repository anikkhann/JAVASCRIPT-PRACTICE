/**
var a=5;
var b=7;                            //temp variable use kore swap kora
var temp=a;
a=b;
b=temp;
console.log("Swap value of:", "A=", a, "B=", b);
*/

//Without Temp variable swap
/** 
var a=5;
var b=7;                                    
a=a+b;
b=a-b;
a=a-b;
console.log("Swap value of:", "A=", a, "B=", b);
*/

var a=5;
var b=7;
[a, b]=[b, a];
console.log("Swap value of:", "A=", a, "B=", b);