var num=[2,3,4,2,5,3,8,10];
var uniqueName=[];
for(var i=0; i<num.length; i++)
{
    var element=num[i];
    var index=uniqueName.indexOf(element);
    if(index == -1)
    {
        uniqueName.push(element);
    }


}
console.log(uniqueName);

//new way to solve 


