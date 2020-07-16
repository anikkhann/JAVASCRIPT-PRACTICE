/**var year=2010;
if(year%400==0)
{
    console.log("Leap Year");
}
else if(year%4==0 && year%100!==0)
{
    console.log("Leap Year");
}
else                                      //if else diye leap year
{
    console.log("Not Leap Year");
}*/

function leapYear(year)
{
    
    if(year%400==0)
    {
        return true;
    }
    else if(year%4==0 && year%100!==0)  //function diye leap year
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

var year2013=leapYear(2013);
console.log(year2013);