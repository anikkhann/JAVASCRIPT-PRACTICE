

function stringRev(str)
{
    var Reverse="";
    for(var i=0;i<str.length;i++)
    {
        var char=str[i];
        Reverse=char + Reverse
        

    }
    return Reverse;
}
var string="I am a good boy.";
var result=stringRev(string);
console.log(result);