var strg="I am a good boy. You are  not good boy.";
var count= 0;
for (var i=0;i<strg.length;i++)

{
    var element=strg[i];
    if(element==" " && strg[i-1] !== " ")
    {
        count++;
    }
}
count++;
console.log(count);